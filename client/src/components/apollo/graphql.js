import gql from "graphql-tag"

// Fragments

export const LIST_PLACE_FRAGMENT = gql`
  fragment ListPlaceFragment on ListPlace {
    id
    sanityId
    name
    imageUrl
    slug
    lat
    lng
    list {
      id
    }
  }
`

export const LIST_FRAGMENT = gql`
  fragment ListFragment on List {
    id
    title
    places {
      ...ListPlaceFragment
    }
  }
  ${LIST_PLACE_FRAGMENT}
`

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    username
    email
    password
    isEmailSubscriber
    lists {
      ...ListFragment
    }
  }
  ${LIST_FRAGMENT}
`

export const COMMENT_FRAGMENT = gql`
  fragment CommentFragment on Comment {
    id
    text
    sanityPostId
    author {
      ...UserFragment
    }
    claps
  }
  ${USER_FRAGMENT}
`

// Client side resolvers

export const IS_LOGGED_IN = gql`
  query IS_LOGGED_IN {
    isLoggedIn @client
  }
`

export const IS_IN_LIST = gql`
  query IS_IN_LIST($listId: ID!, $placeSanityId: String!) {
    isInList(listId: $listId, placeSanityId: $placeSanityId) @client
  }
`

// Queries

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`

export const LIST_QUERY = gql`
  query LIST_QUERY($listId: ID!) {
    list(listId: $listId) {
      ...ListFragment
    }
  }
  ${LIST_FRAGMENT}
`

export const COMMENTS_QUERY = gql`
  query COMMENTS_QUERY($sanityPostId: String!) {
    comments(sanityPostId: $sanityPostId) {
      ...CommentFragment
    }
  }
  ${COMMENT_FRAGMENT}
`

// Mutations

export const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION($authInput: AuthInput!) {
    signup(authInput: $authInput) {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`

export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($authInput: AuthInput!) {
    login(authInput: $authInput) {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`

export const CREATE_LIST_MUTATION = gql`
  mutation CREATE_LIST_MUTATION(
    $title: String!
    $sanityId: String!
    $name: String!
    $imageUrl: String!
    $slug: String!
    $lat: Float!
    $lng: Float!
  ) {
    createList(
      title: $title
      sanityId: $sanityId
      name: $name
      imageUrl: $imageUrl
      slug: $slug
      lat: $lat
      lng: $lng
    ) {
      ...ListFragment
    }
  }
  ${LIST_FRAGMENT}
`

export const UPDATE_LIST_MUTATION = gql`
  mutation UPDATE_LIST_MUTATION($listId: String!, $title: String!) {
    updateList(listId: $listId, title: $title) {
      ...ListFragment
    }
  }
  ${LIST_FRAGMENT}
`

export const DELETE_LIST_MUTATION = gql`
  mutation DELETE_LIST_MUTATION($listId: String!) {
    deleteList(listId: $listId) {
      id
    }
  }
`

export const ADD_TO_LIST_MUTATION = gql`
  mutation ADD_TO_LIST_MUTATION(
    $listId: ID!
    $sanityId: String!
    $name: String!
    $imageUrl: String!
    $slug: String!
    $lat: Float!
    $lng: Float!
  ) {
    addToList(
      listId: $listId
      sanityId: $sanityId
      name: $name
      imageUrl: $imageUrl
      slug: $slug
      lat: $lat
      lng: $lng
    ) {
      ...ListPlaceFragment
    }
  }
  ${LIST_PLACE_FRAGMENT}
`

export const REMOVE_FROM_LIST_MUTATION = gql`
  mutation REMOVE_FROM_LIST($listPlaceId: ID!) {
    removeFromList(listPlaceId: $listPlaceId) {
      id
    }
  }
`

export const SUBSCRIBE_TO_EMAIL_MUTATION = gql`
  mutation SubscribeToEmail($email: String!) {
    subscribeToEmail(email: $email) {
      message
    }
  }
`

export const UNSUBSCRIBE_TO_EMAIL_MUTATION = gql`
  mutation UnsubscribeToEmail {
    ...UserFragment
  }
  ${USER_FRAGMENT}
`

export const ADD_COMMENT_MUTATION = gql`
  mutation ADD_COMMENT_MUTATION($commentInput: CommentInput!) {
    addComment(commentInput: $commentInput) {
      ...CommentFragment
    }
  }
  ${COMMENT_FRAGMENT}
`
