import React from "react"
import { Flex, Heading } from "rebass"

export default function loading({ message }) {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Heading my={[4]} textAlign="center">
        {message}
      </Heading>
    </Flex>
  )
}
