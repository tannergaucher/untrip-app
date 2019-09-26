import React from "react"
import Img from "gatsby-image"
import { Box, Heading } from "grommet"

export default function PostCard({ post }) {
  return (
    <Box margin={{ horizontal: "none", vertical: "large" }}>
      <Img fluid={post.mainImage.asset.fluid} />
      <Box pad="small">
        <Heading
          level="6"
          margin={{ top: "small", bottom: "none" }}
          color="dark-2"
        >
          {post.category.category}
        </Heading>
        <Heading level="2" margin={{ top: "small", bottom: "" }} color="black">
          {post.title}
        </Heading>
      </Box>
    </Box>
  )
}
