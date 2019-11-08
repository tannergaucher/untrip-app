const { sign } = require('jsonwebtoken')
const { hashSync, genSaltSync, compareSync } = require('bcryptjs')

const { getUserId } = require('../utils')
const { prisma } = require('../generated/prisma-client')

const Mutation = {
  signup: async (_parent, { email, password }, _context) => {
    const salt = genSaltSync(10)
    const hashedPassword = hashSync(password, salt)

    const user = await prisma.createUser({
      email,
      password: hashedPassword,
    })

    const token = sign({ userId: user.id }, process.env.APP_SECRET)

    return {
      token,
      user,
    }
  },
  login: async (_parent, { email, password }, _context) => {
    const user = await prisma.user({ email })

    if (!user) {
      throw new Error(`No user found for this email`)
    }

    const passwordValid = compareSync(password, user.password)

    if (!passwordValid) {
      throw new Error(`Invalid password`)
    }

    const token = sign(
      {
        userId: user.id,
      },
      process.env.APP_SECRET
    )

    return {
      token,
      user,
    }
  },
  subscribeToEmail: async (_parent, { email }, _context) => {
    const userExists = await prisma.$exists.user({ email })

    if (userExists) {
      //check to see if they are a subscriber
      const user = await prisma.user({ email })
      if (user.isEmailSubscriber) {
        return {
          message: "Looks like you're already signed up!",
        }
      } else {
        // update subscriber list
        await prisma.createEmailSubscriber({
          email: email,
        })
        //   update user
        await prisma.updateUser({
          where: {
            email,
          },
          data: {
            isEmailSubscriber: true,
          },
        })

        return {
          message: 'Check your inbox and confirm your subscription',
        }
      }
    }

    // if user doesn't exist, simply add email to subscribers list
    await prisma.createEmailSubscriber({
      email: email,
    })

    return {
      message: 'Check your inbox and confirm your subscription',
    }
  },
  unsubscribeToEmail: async (_parent, { email }, _context) => {
    await prisma.deleteEmailSubscriber({
      email,
    })

    const userExists = prisma.$exists.user({ email })

    if (userExists) {
      await prisma.updateUser({
        where: {
          email,
        },
        data: {
          isEmailSubscriber: false,
        },
      })
    }

    return {
      message: 'You are unsubscribed from the Untrip newsletter',
    }
  },
  createList: async (
    _parent,
    { title, sanityId, name, imageUrl, slug, lat, lng },
    context
  ) => {
    const userId = getUserId(context)

    if (!userId) {
      throw new AuthError()
    }

    const list = await prisma.createList({
      title,
      places: {
        create: {
          sanityId,
          name,
          imageUrl,
          slug,
          lat,
          lng,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
    })

    return list
  },

  togglePlace: async (
    _parent,
    { listId, sanityId, name, imageUrl, slug, lat, lng },
    context
  ) => {
    const userId = getUserId(context)

    if (!userId) {
      throw new AuthError()
    }

    const [existing] = await prisma
      .user({ id: userId })
      .lists({
        where: {
          id: listId,
        },
      })
      .places({
        where: {
          sanityId,
        },
      })

    if (existing.places.length) {
      // remove place from list
      return prisma.updateList({
        where: {
          id: listId,
        },
        data: {
          places: {
            delete: {
              id: existing.places[0].id,
            },
          },
        },
      })
    } else {
      // add place to list
      return prisma.updateList({
        where: {
          id: listId,
        },
        data: {
          places: {
            create: {
              sanityId,
              name,
              imageUrl,
              slug,
              lat,
              lng,
            },
          },
        },
      })
    }
  },
}

module.exports = Mutation