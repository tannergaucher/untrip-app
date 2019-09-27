import React from "react"
import { Box, Heading } from "grommet"

export default function loading({ message }) {
  return (
    <Box fill={true} align="center" justify="center">
      <Heading level="4">{message}</Heading>
    </Box>
  )
}
