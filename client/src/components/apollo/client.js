import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"
import fetch from "isomorphic-fetch"
import { CURRENT_USER_QUERY } from "./graphql"

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
      isInList: (_parent, { listId, placeSanityId }, { cache }) => {
        const data = cache.readQuery({ query: CURRENT_USER_QUERY })
        const [myList] = data.me.lists.filter(list => list.id === listId)
        const [existingPlace] = myList.places.filter(
          place => place.sanityId === placeSanityId
        )

        return existingPlace ? true : false
      },
    },
  },
  connectToDevTools: true,
})

const data = {
  isLoggedIn: isBrowser() && !!localStorage.getItem("token"),
}

cache.writeData({ data })
