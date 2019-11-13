module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateEmailSubscriber {
  count: Int!
}

type AggregateList {
  count: Int!
}

type AggregatePlace {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type EmailSubscriber {
  id: ID!
  email: String!
}

type EmailSubscriberConnection {
  pageInfo: PageInfo!
  edges: [EmailSubscriberEdge]!
  aggregate: AggregateEmailSubscriber!
}

input EmailSubscriberCreateInput {
  id: ID
  email: String!
}

type EmailSubscriberEdge {
  node: EmailSubscriber!
  cursor: String!
}

enum EmailSubscriberOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
}

type EmailSubscriberPreviousValues {
  id: ID!
  email: String!
}

type EmailSubscriberSubscriptionPayload {
  mutation: MutationType!
  node: EmailSubscriber
  updatedFields: [String!]
  previousValues: EmailSubscriberPreviousValues
}

input EmailSubscriberSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EmailSubscriberWhereInput
  AND: [EmailSubscriberSubscriptionWhereInput!]
  OR: [EmailSubscriberSubscriptionWhereInput!]
  NOT: [EmailSubscriberSubscriptionWhereInput!]
}

input EmailSubscriberUpdateInput {
  email: String
}

input EmailSubscriberUpdateManyMutationInput {
  email: String
}

input EmailSubscriberWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [EmailSubscriberWhereInput!]
  OR: [EmailSubscriberWhereInput!]
  NOT: [EmailSubscriberWhereInput!]
}

input EmailSubscriberWhereUniqueInput {
  id: ID
  email: String
}

type List {
  id: ID!
  title: String!
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place!]
  user: User!
}

type ListConnection {
  pageInfo: PageInfo!
  edges: [ListEdge]!
  aggregate: AggregateList!
}

input ListCreateInput {
  id: ID
  title: String!
  places: PlaceCreateManyWithoutListInput
  user: UserCreateOneWithoutListsInput!
}

input ListCreateManyWithoutUserInput {
  create: [ListCreateWithoutUserInput!]
  connect: [ListWhereUniqueInput!]
}

input ListCreateOneWithoutPlacesInput {
  create: ListCreateWithoutPlacesInput
  connect: ListWhereUniqueInput
}

input ListCreateWithoutPlacesInput {
  id: ID
  title: String!
  user: UserCreateOneWithoutListsInput!
}

input ListCreateWithoutUserInput {
  id: ID
  title: String!
  places: PlaceCreateManyWithoutListInput
}

type ListEdge {
  node: List!
  cursor: String!
}

enum ListOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
}

type ListPreviousValues {
  id: ID!
  title: String!
}

input ListScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [ListScalarWhereInput!]
  OR: [ListScalarWhereInput!]
  NOT: [ListScalarWhereInput!]
}

type ListSubscriptionPayload {
  mutation: MutationType!
  node: List
  updatedFields: [String!]
  previousValues: ListPreviousValues
}

input ListSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ListWhereInput
  AND: [ListSubscriptionWhereInput!]
  OR: [ListSubscriptionWhereInput!]
  NOT: [ListSubscriptionWhereInput!]
}

input ListUpdateInput {
  title: String
  places: PlaceUpdateManyWithoutListInput
  user: UserUpdateOneRequiredWithoutListsInput
}

input ListUpdateManyDataInput {
  title: String
}

input ListUpdateManyMutationInput {
  title: String
}

input ListUpdateManyWithoutUserInput {
  create: [ListCreateWithoutUserInput!]
  delete: [ListWhereUniqueInput!]
  connect: [ListWhereUniqueInput!]
  set: [ListWhereUniqueInput!]
  disconnect: [ListWhereUniqueInput!]
  update: [ListUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ListUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ListScalarWhereInput!]
  updateMany: [ListUpdateManyWithWhereNestedInput!]
}

input ListUpdateManyWithWhereNestedInput {
  where: ListScalarWhereInput!
  data: ListUpdateManyDataInput!
}

input ListUpdateOneWithoutPlacesInput {
  create: ListCreateWithoutPlacesInput
  update: ListUpdateWithoutPlacesDataInput
  upsert: ListUpsertWithoutPlacesInput
  delete: Boolean
  disconnect: Boolean
  connect: ListWhereUniqueInput
}

input ListUpdateWithoutPlacesDataInput {
  title: String
  user: UserUpdateOneRequiredWithoutListsInput
}

input ListUpdateWithoutUserDataInput {
  title: String
  places: PlaceUpdateManyWithoutListInput
}

input ListUpdateWithWhereUniqueWithoutUserInput {
  where: ListWhereUniqueInput!
  data: ListUpdateWithoutUserDataInput!
}

input ListUpsertWithoutPlacesInput {
  update: ListUpdateWithoutPlacesDataInput!
  create: ListCreateWithoutPlacesInput!
}

input ListUpsertWithWhereUniqueWithoutUserInput {
  where: ListWhereUniqueInput!
  update: ListUpdateWithoutUserDataInput!
  create: ListCreateWithoutUserInput!
}

input ListWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  places_every: PlaceWhereInput
  places_some: PlaceWhereInput
  places_none: PlaceWhereInput
  user: UserWhereInput
  AND: [ListWhereInput!]
  OR: [ListWhereInput!]
  NOT: [ListWhereInput!]
}

input ListWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createEmailSubscriber(data: EmailSubscriberCreateInput!): EmailSubscriber!
  updateEmailSubscriber(data: EmailSubscriberUpdateInput!, where: EmailSubscriberWhereUniqueInput!): EmailSubscriber
  updateManyEmailSubscribers(data: EmailSubscriberUpdateManyMutationInput!, where: EmailSubscriberWhereInput): BatchPayload!
  upsertEmailSubscriber(where: EmailSubscriberWhereUniqueInput!, create: EmailSubscriberCreateInput!, update: EmailSubscriberUpdateInput!): EmailSubscriber!
  deleteEmailSubscriber(where: EmailSubscriberWhereUniqueInput!): EmailSubscriber
  deleteManyEmailSubscribers(where: EmailSubscriberWhereInput): BatchPayload!
  createList(data: ListCreateInput!): List!
  updateList(data: ListUpdateInput!, where: ListWhereUniqueInput!): List
  updateManyLists(data: ListUpdateManyMutationInput!, where: ListWhereInput): BatchPayload!
  upsertList(where: ListWhereUniqueInput!, create: ListCreateInput!, update: ListUpdateInput!): List!
  deleteList(where: ListWhereUniqueInput!): List
  deleteManyLists(where: ListWhereInput): BatchPayload!
  createPlace(data: PlaceCreateInput!): Place!
  updatePlace(data: PlaceUpdateInput!, where: PlaceWhereUniqueInput!): Place
  updateManyPlaces(data: PlaceUpdateManyMutationInput!, where: PlaceWhereInput): BatchPayload!
  upsertPlace(where: PlaceWhereUniqueInput!, create: PlaceCreateInput!, update: PlaceUpdateInput!): Place!
  deletePlace(where: PlaceWhereUniqueInput!): Place
  deleteManyPlaces(where: PlaceWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Place {
  id: ID!
  sanityId: String
  name: String
  imageUrl: String
  slug: String
  lat: Float
  lng: Float
  list: List
}

type PlaceConnection {
  pageInfo: PageInfo!
  edges: [PlaceEdge]!
  aggregate: AggregatePlace!
}

input PlaceCreateInput {
  id: ID
  sanityId: String
  name: String
  imageUrl: String
  slug: String
  lat: Float
  lng: Float
  list: ListCreateOneWithoutPlacesInput
}

input PlaceCreateManyWithoutListInput {
  create: [PlaceCreateWithoutListInput!]
  connect: [PlaceWhereUniqueInput!]
}

input PlaceCreateWithoutListInput {
  id: ID
  sanityId: String
  name: String
  imageUrl: String
  slug: String
  lat: Float
  lng: Float
}

type PlaceEdge {
  node: Place!
  cursor: String!
}

enum PlaceOrderByInput {
  id_ASC
  id_DESC
  sanityId_ASC
  sanityId_DESC
  name_ASC
  name_DESC
  imageUrl_ASC
  imageUrl_DESC
  slug_ASC
  slug_DESC
  lat_ASC
  lat_DESC
  lng_ASC
  lng_DESC
}

type PlacePreviousValues {
  id: ID!
  sanityId: String
  name: String
  imageUrl: String
  slug: String
  lat: Float
  lng: Float
}

input PlaceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  sanityId: String
  sanityId_not: String
  sanityId_in: [String!]
  sanityId_not_in: [String!]
  sanityId_lt: String
  sanityId_lte: String
  sanityId_gt: String
  sanityId_gte: String
  sanityId_contains: String
  sanityId_not_contains: String
  sanityId_starts_with: String
  sanityId_not_starts_with: String
  sanityId_ends_with: String
  sanityId_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  lat: Float
  lat_not: Float
  lat_in: [Float!]
  lat_not_in: [Float!]
  lat_lt: Float
  lat_lte: Float
  lat_gt: Float
  lat_gte: Float
  lng: Float
  lng_not: Float
  lng_in: [Float!]
  lng_not_in: [Float!]
  lng_lt: Float
  lng_lte: Float
  lng_gt: Float
  lng_gte: Float
  AND: [PlaceScalarWhereInput!]
  OR: [PlaceScalarWhereInput!]
  NOT: [PlaceScalarWhereInput!]
}

type PlaceSubscriptionPayload {
  mutation: MutationType!
  node: Place
  updatedFields: [String!]
  previousValues: PlacePreviousValues
}

input PlaceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlaceWhereInput
  AND: [PlaceSubscriptionWhereInput!]
  OR: [PlaceSubscriptionWhereInput!]
  NOT: [PlaceSubscriptionWhereInput!]
}

input PlaceUpdateInput {
  sanityId: String
  name: String
  imageUrl: String
  slug: String
  lat: Float
  lng: Float
  list: ListUpdateOneWithoutPlacesInput
}

input PlaceUpdateManyDataInput {
  sanityId: String
  name: String
  imageUrl: String
  slug: String
  lat: Float
  lng: Float
}

input PlaceUpdateManyMutationInput {
  sanityId: String
  name: String
  imageUrl: String
  slug: String
  lat: Float
  lng: Float
}

input PlaceUpdateManyWithoutListInput {
  create: [PlaceCreateWithoutListInput!]
  delete: [PlaceWhereUniqueInput!]
  connect: [PlaceWhereUniqueInput!]
  set: [PlaceWhereUniqueInput!]
  disconnect: [PlaceWhereUniqueInput!]
  update: [PlaceUpdateWithWhereUniqueWithoutListInput!]
  upsert: [PlaceUpsertWithWhereUniqueWithoutListInput!]
  deleteMany: [PlaceScalarWhereInput!]
  updateMany: [PlaceUpdateManyWithWhereNestedInput!]
}

input PlaceUpdateManyWithWhereNestedInput {
  where: PlaceScalarWhereInput!
  data: PlaceUpdateManyDataInput!
}

input PlaceUpdateWithoutListDataInput {
  sanityId: String
  name: String
  imageUrl: String
  slug: String
  lat: Float
  lng: Float
}

input PlaceUpdateWithWhereUniqueWithoutListInput {
  where: PlaceWhereUniqueInput!
  data: PlaceUpdateWithoutListDataInput!
}

input PlaceUpsertWithWhereUniqueWithoutListInput {
  where: PlaceWhereUniqueInput!
  update: PlaceUpdateWithoutListDataInput!
  create: PlaceCreateWithoutListInput!
}

input PlaceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  sanityId: String
  sanityId_not: String
  sanityId_in: [String!]
  sanityId_not_in: [String!]
  sanityId_lt: String
  sanityId_lte: String
  sanityId_gt: String
  sanityId_gte: String
  sanityId_contains: String
  sanityId_not_contains: String
  sanityId_starts_with: String
  sanityId_not_starts_with: String
  sanityId_ends_with: String
  sanityId_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  lat: Float
  lat_not: Float
  lat_in: [Float!]
  lat_not_in: [Float!]
  lat_lt: Float
  lat_lte: Float
  lat_gt: Float
  lat_gte: Float
  lng: Float
  lng_not: Float
  lng_in: [Float!]
  lng_not_in: [Float!]
  lng_lt: Float
  lng_lte: Float
  lng_gt: Float
  lng_gte: Float
  list: ListWhereInput
  AND: [PlaceWhereInput!]
  OR: [PlaceWhereInput!]
  NOT: [PlaceWhereInput!]
}

input PlaceWhereUniqueInput {
  id: ID
}

type Query {
  emailSubscriber(where: EmailSubscriberWhereUniqueInput!): EmailSubscriber
  emailSubscribers(where: EmailSubscriberWhereInput, orderBy: EmailSubscriberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EmailSubscriber]!
  emailSubscribersConnection(where: EmailSubscriberWhereInput, orderBy: EmailSubscriberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmailSubscriberConnection!
  list(where: ListWhereUniqueInput!): List
  lists(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [List]!
  listsConnection(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ListConnection!
  place(where: PlaceWhereUniqueInput!): Place
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place]!
  placesConnection(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  emailSubscriber(where: EmailSubscriberSubscriptionWhereInput): EmailSubscriberSubscriptionPayload
  list(where: ListSubscriptionWhereInput): ListSubscriptionPayload
  place(where: PlaceSubscriptionWhereInput): PlaceSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  isEmailSubscriber: Boolean
  lists(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [List!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  isEmailSubscriber: Boolean
  lists: ListCreateManyWithoutUserInput
}

input UserCreateOneWithoutListsInput {
  create: UserCreateWithoutListsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutListsInput {
  id: ID
  email: String!
  password: String!
  isEmailSubscriber: Boolean
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  isEmailSubscriber_ASC
  isEmailSubscriber_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  isEmailSubscriber: Boolean
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  isEmailSubscriber: Boolean
  lists: ListUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  isEmailSubscriber: Boolean
}

input UserUpdateOneRequiredWithoutListsInput {
  create: UserCreateWithoutListsInput
  update: UserUpdateWithoutListsDataInput
  upsert: UserUpsertWithoutListsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutListsDataInput {
  email: String
  password: String
  isEmailSubscriber: Boolean
}

input UserUpsertWithoutListsInput {
  update: UserUpdateWithoutListsDataInput!
  create: UserCreateWithoutListsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  isEmailSubscriber: Boolean
  isEmailSubscriber_not: Boolean
  lists_every: ListWhereInput
  lists_some: ListWhereInput
  lists_none: ListWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    