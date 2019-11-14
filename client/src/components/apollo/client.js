import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"
import fetch from "isomorphic-fetch"

const isBrowser = () => typeof window !== "undefined"

const httpLink = createHttpLink({
  uri: process.env.GATSBY_SERVER_URL,
  credentials: "include",
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token")
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const cache = new InMemoryCache()

export const client = new ApolloClient({
  fetch,
  cache,
  link: authLink.concat(httpLink),
  resolvers: {
    Mutation: {},
    Query: {
      isInList: (_parent, { places, placeSanityId }, _context) => {
        const isInList = places.filter(
          place => place.sanityId === placeSanityId
        )
        return isInList.length ? true : false
      },
    },
  },
  connectToDevTools: true,
})

const data = {
  isLoggedIn: isBrowser() && !!localStorage.getItem("token"),
}

cache.writeData({ data })
