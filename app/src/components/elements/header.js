import React from "react"
import { Previous } from "grommet-icons"
import { Flex, Heading } from "rebass"

import { Link } from "../styles"
import { Menu } from "../elements"

export default function Header({ location }) {
  return (
    <Flex
      as="header"
      justifyContent="space-between"
      bg="var(--light-1)"
      p={[2]}
      opacity=".92"
      style={{
        position: `sticky`,
        top: `0`,
        zIndex: `1`,
        borderBottom: `1px solid var(--light-2)`,
      }}
    >
      <button
        onClick={e => {
          e.preventDefault()
          window.history.back()
        }}
        style={{
          visibility: location.pathname === "/" ? "hidden" : "visible",
        }}
      >
        <Previous color="var(--dark-1)" />
      </button>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <Heading fontSize={[3]} color="var(--dark-1)" letterSpacing="-.5px">
          Untrip
        </Heading>
      </Link>
      <Menu />
    </Flex>
  )
}
