const { gql } = require('apollo-server')

// Public facing API

const typeDefs = gql`
  input AuthInput {
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type SuccessMessage {
    message: String!
  }

  type User {
    id: ID!
    email: String!
    password: String!
    lists: [List!]
    isEmailSubscriber: Boolean
  }

  type List {
    id: ID!
    title: String!
    places: [ListPlace!]
    user: User!
  }

  type ListPlace {
    id: ID!
    sanityId: String
    name: String
    imageUrl: String
    slug: String
    lat: Float
    lng: Float
    list: List
  }

  type EmailSubscriber {
    id: ID!
    email: String!
  }

  type Query {
    me: User
    list(listId: ID!): List
  }

  type Mutation {
    signup(authInput: AuthInput!): AuthPayload!
    login(authInput: AuthInput!): AuthPayload!
    createList(
      title: String!
      sanityId: String!
      name: String!
      imageUrl: String!
      slug: String!
      lat: Float!
      lng: Float!
    ): List!
    updateList(listId: String!, title: String!): List!
    deleteList(listId: String!): List
    addToList(
      listId: ID
      sanityId: String
      name: String
      imageUrl: String
      slug: String
      lat: Float
      lng: Float
    ): ListPlace
    removeFromList(listPlaceId: ID!): ListPlace
    subscribeToEmail(email: String!): SuccessMessage!
    unsubscribeToEmail(email: String!): SuccessMessage!
  }
`

module.exports = typeDefs
