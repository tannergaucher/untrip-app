const { ApolloServer, gql } = require("apollo-server-lambda")
const { prisma } = require("./generated/prisma-client")
const { verify, sign } = require("jsonwebtoken")
const { hashSync, genSaltSync, compareSync } = require("bcryptjs")

class AuthError extends Error {
  constructor() {
    super("You are not authorized")
  }
}

function getUserId(context) {
  const Authorization = context.request.event.headers.authorization

  if (Authorization) {
    const token = Authorization.replace("Bearer ", "")
    const verifiedToken = verify(token, process.env.GATSBY_APP_SECRET)

    return verifiedToken && verifiedToken.userId
  }
}

const typeDefs = gql`
  type AuthPayload {
    token: String!
    user: User!
  }

  type User {
    id: ID!
    email: String!
    password: String!
    lists: [List!]
  }

  type List {
    id: ID!
    title: String!
    places: [Place!]
    user: User!
  }

  type Place {
    id: ID!
    placeSanityId: String
    placeName: String
    placeImageUrl: String
    placeSlug: String
    lat: Float
    lng: Float
    list: List
  }

  type Query {
    me: User
    list(listId: ID!): List
  }

  type Mutation {
    signup(email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createList(
      title: String!
      placeSanityId: String!
      placeName: String!
      placeImageUrl: String!
      placeSlug: String!
      lat: Float!
      lng: Float!
    ): List!
    togglePlace(
      listId: ID!
      placeSanityId: String
      placeName: String
      placeImageUrl: String
      placeSlug: String
      lat: Float
      lng: Float
    ): List!
  }
`

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      const userId = getUserId(context)

      if (!userId) {
        return null
      }

      return prisma.user({ id: userId })
    },
    list: async (parent, { listId }, context) => {
      const userId = getUserId(context)

      if (!userId) {
        return null
      }

      return prisma.list({ id: listId })
    },
  },

  Mutation: {
    signup: async (parent, { email, password }, context) => {
      const salt = getSaltSync(10)
      const hashedPassword = hashSynx(password, salt)

      const user = await prisma.createUser({
        email,
        password: hashedPassword,
      })

      const token = sign({ userId: user.id }, process.env.GATSBY_APP_SECRET)

      return {
        token,
        user,
      }
    },
    login: async (parent, { email, password }, context) => {
      const user = await prisma.user({ email })

      if (!user) {
        throw new Error(`No user found for this email`)
      }

      const passwordValid = await compareSync(password, user.password)

      if (!passwordValid) {
        throw new Error(`Invalid password`)
      }

      const token = sign(
        {
          userId: user.id,
        },
        process.env.GATSBY_APP_SECRET
      )

      return {
        token,
        user,
      }
    },
    createList: async (
      parent,
      { title, placeSanityId, placeName, placeImageUrl, placeSlug, lat, lng },
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
            placeSanityId,
            placeName,
            placeImageUrl,
            placeSlug,
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
      parent,
      { listId, placeSanityId, placeName, placeImageUrl, placeSlug, lat, lng },
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
            placeSanityId: placeSanityId,
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
                placeSanityId: placeSanityId,
                placeName: placeName,
                placeImageUrl: placeImageUrl,
                placeSlug: placeSlug,
                lat: lat,
                lng: lng,
              },
            },
          },
        })
      }
    },
  },
  User: {
    lists: ({ id }, args, context) => {
      return prisma.user({ id }).lists()
    },
  },
  Place: {
    list: ({ id }, args, context) => {
      return prisma.place({ id }).list()
    },
  },
  List: {
    user: ({ id }, args, context) => {
      return prisma.list({ id }).user()
    },
    places: ({ id }, args, context) => {
      return prisma.list({ id }).places()
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  context: async request => {
    return {
      request,
    }
  },
})

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
})
