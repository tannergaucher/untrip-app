const { verify } = require('jsonwebtoken')

function getUserId(context) {
  const Authorization = context.req.headers.authorization

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, process.env.GATSBY_APP_SECRET)

    return verifiedToken && verifiedToken.userId
  }
}

module.exports = getUserId
