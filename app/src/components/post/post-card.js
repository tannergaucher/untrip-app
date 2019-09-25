import React from "react"
import Img from "gatsby-image"
import { Box, Heading } from "grommet"

export default function PostCard({ post }) {
  return (
    <Box>
      <Img fluid={post.mainImage.asset.fluid} />
      <Heading>{post.category.category}</Heading>
      <Heading>{post.title}</Heading>
    </Box>
  )
}
