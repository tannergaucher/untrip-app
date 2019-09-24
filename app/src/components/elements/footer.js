import React from "react"
import { Box, Heading } from "rebass"

import { Link } from "../styles"

export default function Footer() {
  return (
    <Box as="footer" bg="var(--dark-1)" px={[4]} py={[5]}>
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
      <Heading
        color="var(--light-3)"
        fontSize={[1]}
        fontWeight="lighter"
        my={[1]}
        style={{ textTransform: `uppercase` }}
      >
        {text}
      </Heading>
    </Link>
  )
}
