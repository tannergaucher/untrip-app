const { prisma } = require('../generated/prisma-client')

const User = {
  lists: ({ id }, args, context) => {
    return prisma.user({ id }).lists()
  },
}

module.exports = User
