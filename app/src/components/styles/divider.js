import React from "react"
import { Box } from "rebass"

export default function Divider(props) {
  return (
    <Box
      {...props}
      as="hr"
      style={{ border: `none`, borderTop: `4px solid var(--dark-1)` }}
    />
  )
}
