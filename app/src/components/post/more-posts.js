import React from "react"
import { Box, Heading } from "grommet"

import { useMorePosts } from "../hooks"
import { PostCard } from "."

export default function MorePosts() {
  const { edges } = useMorePosts()

  return (
    <Box margin="medium">
      <Heading level="2">More From Untrip</Heading>
      {edges.map(edge => (
        <PostCard post={edge.node} key={edge.node.id} />
      ))}
    </Box>
  )
}
