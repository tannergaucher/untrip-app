import React from "react"
import { Box, Heading } from "grommet"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <Box as="footer" background="light-2" pad="large">
      <NavLink text="About Untrip" to="/about" />
      <NavLink text="Contact" to="/contact" />
      <NavLink text="Download the App" to="/download" />
    </Box>
  )
}

function NavLink({ to, text }) {
  return (
    <Link to={to} style={{ color: "interit", textDecoration: "none" }}>
      <Heading level="5" margin={{ vertical: "medium" }} color="dark-1">
        {text}
      </Heading>
    </Link>
  )
}
