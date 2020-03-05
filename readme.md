# [Untrip.app](https://untrip.app)

## Curate static content into dynamic city lists and share on social media.

## Uses

- [Gatsby](https://www.gatsbyjs.org/)
- [Sanity CMS](https://www.sanity.io/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [React Hooks Apollo](https://www.apollographql.com/docs/react/api/react-hooks/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Prisma](https://www.prisma.io/)

## Client Development ENV

### GATSBY_SERVER_URL="http://localhost:4000"

### GATSBY_GOOGLE_MAPS_KEY=<YOUR_API_KEY>

Make environment variables available and run client with `gatsby develop`

View client on http://localhost:8000

## Server Development ENV

### CLIENT_URL="http://localhost:8888"

### APP_SECRET=<ANY_STRING>

### Deploy Datamodel to Prisma

Make an account with prisma and install the prisma cli.

`prisma login`

From the server directory run `prisma deploy`

### Run Server

Make environment variables available and run server with `npm start`

View graphql playground on http://localhost:4000


