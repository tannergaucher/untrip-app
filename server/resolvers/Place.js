const { prisma } = require('../generated/prisma-client')

const Place = {
  list: ({ id }, args, context) => {
    return prisma.place({ id }).list()
  },
}

module.exports = Place
