const { ApolloServer } = require("apollo-server-lambda")

const typeDefs = require("../typeDefs")
const resolvers = require("../resolvers")

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  context: async request => {
    return {
      request,
    }
  },
})

exports.handler = server.createHandler()
