import React from "react"
import Img from "gatsby-image"
import { Box, Heading } from "grommet"

export default function PostCard({ post }) {
  return (
    <Box margin={{ bottom: "large" }}>
      <Img fluid={post.mainImage.asset.fluid} />
      <Box pad="medium">
        <Heading
          level="6"
          margin={{ top: "none", bottom: "none" }}
          color="black"
        >
          {post.category.category}
        </Heading>
        <Heading level="2" margin={{ top: "xsmall", bottom: "" }} color="black">
          {post.title}
        </Heading>
      </Box>
    </Box>
  )
}
