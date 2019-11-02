const { prisma } = require("../prisma/generated/prisma-client")

const List = {
  user: ({ id }, args, context) => {
    return prisma.list({ id }).user()
  },
  places: ({ id }, args, context) => {
    return prisma.list({ id }).places()
  },
}

module.exports = List
