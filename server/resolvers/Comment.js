const { prisma } = require('../generated/prisma-client')

const Comment = {
  author: ({ id }, _args, _context) => {
    return prisma.comment({ id }).author()
  },
}

module.exports = Comment
