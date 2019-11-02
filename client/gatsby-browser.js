const React = require("react")
const { ApolloProvider } = require("@apollo/react-hooks")

const { Layout } = require("./src/components/elements")
const { client } = require("./src/components/apollo/client")

exports.wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)

exports.wrapPageElement = ({ element, props }) => (
  <Layout location={props.location}>{element}</Layout>
)
