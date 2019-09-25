import React from "react"
import { Previous } from "grommet-icons"
import { Box, Heading, Button } from "grommet"
import { Link } from "gatsby"

import { Menu } from "../elements"

export default function Header({ location }) {
  return (
    <Box as="header" direction="row" justify="between">
      <Button
        plain={true}
        icon={<Previous color="var(--dark-1)" />}
        style={{
          visibility: location.pathname === "/" ? "hidden" : "visible",
        }}
        onClick={e => {
          e.preventDefault()
          window.history.back()
        }}
      />
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <Heading>Untrip</Heading>
      </Link>
      <Menu />
    </Box>
  )
}
