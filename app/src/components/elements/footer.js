import React from "react"
import { Box, Heading, Anchor } from "grommet"
import { navigate } from "gatsby"

export default function Footer() {
  return (
    <Box as="footer" background="light-2" pad="large">
      <NavLink text="About" to="/about" />
      <NavLink text="Contact" to="/contact" />
      <NavLink text="Download the App" to="/download" />
    </Box>
  )
}

function NavLink({ to, text }) {
  return (
    <Anchor
      onClick={() => {
        navigate(to)
      }}
    >
      <Heading level="5" margin={{ vertical: "medium" }} textAlign="center">
        {text}
      </Heading>
    </Anchor>
  )
}
