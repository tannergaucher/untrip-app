import React from "react"
import { Previous } from "grommet-icons"
import { Box, Heading, Button } from "grommet"
import { Link } from "gatsby"

import { Menu } from "../elements"

export default function Header({ location }) {
  return (
    <Box
      as="header"
      direction="row"
      justify="between"
      align="center"
      background="light-1"
      style={{ position: `sticky`, top: "0", zIndex: "3", opacity: ".97" }}
    >
      <Button
        plain={true}
        icon={<Previous color="black" size="18px" />}
        margin="small"
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
          color: `inherit`,
        }}
      >
        <Heading level="3" margin="small" color="black">
          Untrip
        </Heading>
      </Link>
      <Menu />
    </Box>
  )
}
