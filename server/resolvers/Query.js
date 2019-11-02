const { prisma } = require('../generated/prisma-client')
const { getUserId } = require('../utils')

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
