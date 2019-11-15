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
          message: `Hooray! You've signed up for the Untrip weekly newsletter. Some more product description goes here.`,
        }
      }
    }

    // if user doesn't exist, simply add email to subscribers list
    await prisma.createEmailSubscriber({
      email: email,
    })

    return {
      message: `Hooray! You've signed up for the Untrip weekly newsletter. Some more product description goes here.`,
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
        create: [
          {
            sanityId,
            name,
            imageUrl,
            slug,
            lat,
            lng,
          },
        ],
      },
      user: {
        connect: {
          id: userId,
        },
      },
    })

    return list
  },
  updateList: async (_parent, { listId, title }, context) => {
    const userId = getUserId(context)

    if (!userId) {
      throw new AuthError()
    }

    const list = await prisma.updateList({
      where: {
        id: listId,
      },
      data: {
        title,
      },
    })

    return list
  },
  deleteList: async (_parent, { listId }, context, info) => {
    const userId = getUserId(context)

    if (!userId) {
      throw new AuthError()
    }

    return await prisma.deleteList(
      {
        id: listId,
      },
      info
    )
  },
  addToList: async (
    _parent,
    { listId, sanityId, name, imageUrl, slug, lat, lng },
    _context
  ) => {
    const listPlace = await prisma.createListPlace({
      sanityId,
      name,
      imageUrl,
      slug,
      lat,
      lng,
      list: {
        connect: {
          id: listId,
        },
      },
    })

    return listPlace
  },

  removeFromList: async (_parent, { listPlaceId }, context, info) => {
    const userId = getUserId(context)

    if (!userId) {
      throw new AuthError()
    }

    return await prisma.deleteListPlace(
      {
        id: listPlaceId,
      },
      info
    )
  },
}

module.exports = Mutation
