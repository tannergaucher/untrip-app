# [Untrip.app](https://untrip.app)

## Curate static content into dynamic city lists and share on social media.

## Uses

- [Gatsby](https://www.gatsbyjs.org/)
- [Sanity CMS](https://www.sanity.io/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [React Hooks Apollo](https://www.apollographql.com/docs/react/api/react-hooks/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Prisma](https://www.prisma.io/)

## Server ENV

CLIENT_URL="http://localhost:8888"

APP_SECRET=<ANY_STRING>

Login to Prisma

`prisma login`

Deploy datamodel to Prisma

`prisma deploy`

Make server environment variables available and `npm start`

View graphql playground on http://localhost:4000

## Client ENV

GATSBY_SERVER_URL="http://localhost:4000"

GATSBY_GOOGLE_MAPS_KEY=<YOUR_API_KEY>

Make client environment variables available and `gatsby develop`

View app on http://localhost:8000
