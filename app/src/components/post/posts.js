import React from "react"
import { Link } from "gatsby"
import { Box, Heading } from "grommet"

import { PostCard } from "../post"
import { useAllSanityPost } from "../hooks"

export default function Posts() {
  const { edges } = useAllSanityPost()

  return (
    <Box margin={{ vertical: "medium" }}>
      <Heading level="2" textAlign="center">
        Latest Posts
      </Heading>
      {edges.map(edge => (
        <Link
          to={`/posts/${edge.node.category.slug.current}/${edge.node.slug.current}`}
          key={edge.node.id}
          style={{ textDecoration: `none`, color: `inherit` }}
        >
          <PostCard key={edge.node.id} post={edge.node} />
        </Link>
      ))}
    </Box>
  )
}
