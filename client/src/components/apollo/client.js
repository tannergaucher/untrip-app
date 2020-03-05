import { ApolloClient } from "apollo-client"
import { CURRENT_USER_QUERY } from "./graphql"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import fetch from "isomorphic-fetch"
import { setContext } from "apollo-link-context"

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

const cache = new InMemoryCache({
  freezeResults: true,
})

export const client = new ApolloClient({
  fetch,
  cache,
  link: authLink.concat(httpLink),
  resolvers: {
    Mutation: {},
    Query: {
      isInList: (_parent, { listId, placeSanityId }, { client }) => {
        const data = client.readQuery({ query: CURRENT_USER_QUERY })
        const [myList] = data.me.lists.filter(list => list.id === listId)
        const [existingPlace] = myList.places.filter(
          place => place.sanityId === placeSanityId
        )

        return existingPlace !== undefined
      },
      isMyComment: (_parent, { commentAuthorId }, { client }) => {
        const data = client.readQuery({ query: CURRENT_USER_QUERY })
        return data && data.me && data.me.id === commentAuthorId
      },
    },
  },
  connectToDevTools: true,
  assumeImmutableResults: true,
})

const data = {
  isLoggedIn: isBrowser() && !!localStorage.getItem("token"),
}

cache.writeData({ data })
