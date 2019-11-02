const { gql } = require('apollo-server')

const typeDefs = gql`
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
    places: [Place!]
    user: User!
  }

  type Place {
    id: ID!
    placeSanityId: String
    placeName: String
    placeImageUrl: String
    placeSlug: String
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
    signup(email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createList(
      title: String!
      placeSanityId: String!
      placeName: String!
      placeImageUrl: String!
      placeSlug: String!
      lat: Float!
      lng: Float!
    ): List!
    togglePlace(
      listId: ID!
      placeSanityId: String
      placeName: String
      placeImageUrl: String
      placeSlug: String
      lat: Float
      lng: Float
    ): List!
    subscribeToEmail(email: String!): SuccessMessage!
    unsubscribeToEmail(email: String!): SuccessMessage!
  }
`

module.exports = typeDefs
