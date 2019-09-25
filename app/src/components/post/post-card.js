import React from "react"
import Img from "gatsby-image"
import { Box, Heading } from "grommet"

export default function PostCard({ post }) {
  return (
    <Box
      margin={{ horizontal: "small", vertical: "large" }}
      round="small"
      elevation="medium"
    >
      <Img
        fluid={post.mainImage.asset.fluid}
        style={{ borderRadius: "6px 6px 0px 0px" }}
      />
      <Box pad="small">
        <Heading level="6" margin="none" color="dark-3">
          {post.category.category}
        </Heading>
        <Heading
          level="2"
          margin={{ top: "xsmall", horizontal: "none", vertical: "none" }}
        >
          {post.title}
        </Heading>
      </Box>
    </Box>
  )
}
