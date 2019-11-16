const { prisma } = require('../generated/prisma-client')

const ListPlace = {
  list: ({ id }, _args, _context) => {
    return prisma.listPlace({ id }).list()
  },
}

module.exports = ListPlace
