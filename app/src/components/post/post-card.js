import React from "react"
import Img from "gatsby-image"
import { Box, Heading } from "grommet"

export default function PostCard({ post }) {
  return (
    <Box
      margin={{ horizontal: "small", vertical: "large" }}
      round="small"
      elevation="small"
    >
      <Box pad="small" direction="row">
        <Heading
          level="6"
          margin={{ top: "small", bottom: "xsmall" }}
          color="dark-2"
        >
          {post.category.category}
        </Heading>
      </Box>
      <Img fluid={post.mainImage.asset.fluid} />

      <Box pad="small">
        <Heading level="2" margin={{ top: "small", bottom: "small" }}>
          {post.title}
        </Heading>
      </Box>
    </Box>
  )
}
