import React from "react"
import PropTypes from "prop-types"
import { useQuery } from "@apollo/react-hooks"

import { Header, Footer } from "../elements"
import { CURRENT_USER_QUERY } from "../apollo/graphql"
import "./layout.css"

export default function Layout({ children, location }) {
  useQuery(CURRENT_USER_QUERY)

  return (
    <div
      style={{
        display: `grid`,
        gridTemplateRows: `auto 1fr auto`,
        minHeight: `100vh`,
      }}
    >
      <Header location={location} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
