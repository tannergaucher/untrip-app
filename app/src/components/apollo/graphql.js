import gql from "graphql-tag"

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    email
    password
    lists {
      id
      title
      places {
        id
        placeSanityId
        placeName
        placeImageUrl
        placeSlug
        lat
        lng
      }
    }
  }
`

export const LIST_FRAGMENT = gql`
  fragment ListFragment on List {
    id
    title
    places {
      id
      placeSanityId
      placeName
      placeImageUrl
      placeSlug
      lat
      lng
    }
  }
`

export const IS_LOGGED_IN = gql`
  query IS_LOGGED_IN {
    isLoggedIn @client
  }
`

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`

export const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`

export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
    $placeSanityId: String!
    $placeName: String!
    $placeImageUrl: String!
    $placeSlug: String!
    $lat: Float!
    $lng: Float!
  ) {
    createList(
      title: $title
      placeSanityId: $placeSanityId
      placeName: $placeName
      placeImageUrl: $placeImageUrl
      placeSlug: $placeSlug
      lat: $lat
      lng: $lng
    ) {
      ...ListFragment
    }
  }
  ${LIST_FRAGMENT}
`

export const TOGGLE_PLACE_MUTATION = gql`
  mutation TOGGLE_PLACE_MUTATION(
    $listId: ID!
    $placeSanityId: String!
    $placeName: String!
    $placeImageUrl: String!
    $placeSlug: String!
    $lat: Float!
    $lng: Float!
  ) {
    togglePlace(
      listId: $listId
      placeSanityId: $placeSanityId
      placeName: $placeName
      placeImageUrl: $placeImageUrl
      placeSlug: $placeSlug
      lat: $lat
      lng: $lng
    ) {
      ...ListFragment
    }
  }
  ${LIST_FRAGMENT}
`

export const LIST_QUERY = gql`
  query list($listId: ID!) {
    list(listId: $listId) {
      ...ListFragment
    }
  }
  ${LIST_FRAGMENT}
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
