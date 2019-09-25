import React from "react"
import PropTypes from "prop-types"
import { Box, Grommet } from "grommet"
import { useQuery } from "@apollo/react-hooks"

import { Header, Footer } from "../elements"
import { CURRENT_USER_QUERY } from "../apollo/graphql"
import "./layout.css"

const myTheme = {
  global: {},
  layer: {
    background: "light-2",
  },
}

export default function Layout({ children, location }) {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  return (
    <Grommet theme={myTheme}>
      <Box background="light-1">
        <Header location={location} />
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
