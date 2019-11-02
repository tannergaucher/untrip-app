const { prisma } = require("../prisma/generated/prisma-client")
const { verify } = require("jsonwebtoken")

function getUserId(context) {
  const Authorization = context.request.event.headers.authorization

  if (Authorization) {
    const token = Authorization.replace("Bearer ", "")
    const verifiedToken = verify(token, process.env.GATSBY_APP_SECRET)

    return verifiedToken && verifiedToken.userId
  }
}

const Query = {
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
}

module.exports = Query
