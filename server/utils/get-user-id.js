const { verify } = require('jsonwebtoken')

function getUserId(context) {
  const { authorization } = context.req.headers

  if (authorization) {
    const token = authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, process.env.APP_SECRET)

    return verifiedToken && verifiedToken.userId
  }
}

module.exports = getUserId
