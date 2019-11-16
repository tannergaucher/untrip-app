const { prisma } = require('../generated/prisma-client')

const User = {
  lists: ({ id }, _args, _context) => {
    return prisma.user({ id }).lists()
  },
}

module.exports = User
