import React from "react"
import { Box, Heading } from "grommet"

export default function loading({ message }) {
  return (
    <Box>
      <Heading>{message}</Heading>
    </Box>
  )
}
