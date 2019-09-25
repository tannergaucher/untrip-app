import React from "react"
import Img from "gatsby-image"
import { Box, Heading } from "grommet"

export default function PostCard({ post }) {
  return (
    <Box margin="medium" round="medium" elevation="medium">
      <Img
        fluid={post.mainImage.asset.fluid}
        style={{ borderRadius: "12px 12px 0px 0px" }}
      />
      <Box pad="small">
        <Heading level="6" margin="none" color="dark-2">
          {post.category.category}
        </Heading>
        <Heading level="2" margin="none">
          {post.title}
        </Heading>
      </Box>
    </Box>
  )
}
