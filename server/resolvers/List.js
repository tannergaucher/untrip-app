const { prisma } = require('../generated/prisma-client')

const List = {
  user: ({ id }, _args, _context) => {
    return prisma.list({ id }).user()
  },
  places: ({ id }, _args, _context) => {
    return prisma.list({ id }).places()
  },
}

module.exports = List
