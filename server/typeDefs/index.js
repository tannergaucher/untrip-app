const { gql } = require('apollo-server')

// Public facing API

const typeDefs = gql`
  scalar DateTime

  input AuthInput {
    username: String!
    email: String!
    password: String!
  }

  input CommentInput {
    sanityPostId: String!
    text: String!
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
    username: String!
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

  type Comment {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime
    sanityPostId: String!
    text: String!
    author: User!
    claps: Int
  }

  type Query {
    me: User
    list(listId: ID!): List
    comments(sanityPostId: String!): [Comment!]
  }

  type Mutation {
    signup(authInput: AuthInput!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
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
    addComment(commentInput: CommentInput!): Comment!
    editComment(commentId: ID!, text: String!): Comment!
    deleteComnent(sanityPostId: String!): Comment
  }
`

module.exports = typeDefs
