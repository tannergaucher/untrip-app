const { prisma } = require('../generated/prisma-client')
const { getUserId } = require('../utils')

const Query = {
  me: async (_parent, _args, context) => {
    const userId = getUserId(context)

    if (!userId) {
      return null
    }

    return prisma.user({ id: userId })
  },
  list: async (_parent, { listId }, context) => {
    const userId = getUserId(context)

    if (!userId) {
      return null
    }

    return prisma.list({ id: listId })
  },
  user: async (_parent, { userId }, _context) => {
    const user = prisma.user({ id: userId })
    return user
  },
}

module.exports = Query
