import React from "react"
import PropTypes from "prop-types"
import { useQuery } from "@apollo/react-hooks"

import { Header, Footer } from "../elements"
import { CURRENT_USER_QUERY } from "../apollo/graphql"
import "./layout.css"

export default function Layout({ children, location }) {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  return (
    <>
      <Header location={location} />
      <main style={{ minHeight: `100vh` }}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
