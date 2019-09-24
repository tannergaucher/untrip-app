import React from "react"
import PropTypes from "prop-types"
import { Box } from "rebass"
import { useQuery } from "@apollo/react-hooks"

import { Header, Footer } from "../elements"
import { CURRENT_USER_QUERY } from "../apollo/graphql"
import "./layout.css"

export default function Layout({ children, location }) {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  return (
    <Box
      style={{
        margin: "0 auto",
        maxWidth: `var(--max-width)`,
      }}
    >
      <Box
        style={{
          position: `sticky`,
          top: `0`,
          zIndex: `1`,
        }}
      >
        <Header location={location} />
      </Box>
      <Box as="main" style={{ minHeight: `100vh` }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
