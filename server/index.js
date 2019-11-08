const { ApolloServer } = require('apollo-server')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
require('dotenv').config()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true,
  },
  playground: true,
  context: async request => {
    return {
      ...request,
    }
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
