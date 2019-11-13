const { prisma } = require('../generated/prisma-client')

const ListPlace = {
  list: ({ id }, args, context) => {
    return prisma.listPlace({ id }).list()
  },
}

module.exports = ListPlace
