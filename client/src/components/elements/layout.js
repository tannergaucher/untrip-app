import "./layout.css"

import { Footer, Header } from "../elements"

import { CURRENT_USER_QUERY } from "../apollo/graphql"
import PropTypes from "prop-types"
import React from "react"
import { useQuery } from "@apollo/react-hooks"

export default function Layout({ children, location }) {
  useQuery(CURRENT_USER_QUERY)

  return (
    <>
      <Header location={location} />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
