import React from "react"
import { Box, Heading } from "grommet"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <Box as="footer" background={{ color: "black" }}>
      <NavLink text="About" to="/about" />
      <NavLink text="Contact" to="/contact" />
      <NavLink text="Sign Up" to="/signup" />
      <NavLink text="Download our app" to="/download" />
    </Box>
  )
}

function NavLink({ to, text }) {
  return (
    <Link to={to}>
      <Heading>{text}</Heading>
    </Link>
  )
}
