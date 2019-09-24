import React from "react"
import Img from "gatsby-image"
import { Heading, Box } from "rebass"

import { Share } from "../post"

export default function ImageCard({ post }) {
  return (
    <Box
      style={{
        position: `relative`,
        boxShadow: `var(--elevation-1)`,
      }}
      my={[5]}
      mx={[2]}
    >
      <Img
        fluid={post.mainImage.asset.fluid}
        style={{ filter: `brightness(.6)`, height: `350px` }}
      />

      <Box style={{ position: `absolute`, top: `0` }} p={[3]}>
        <Heading
          fontSize={[1]}
          fontWeight="lighter"
          style={{ textTransform: `uppercase` }}
          color="var(--light-1)"
        >
          {post.category.category}
        </Heading>
        <Heading
          color="var(--light-1)"
          fontSize={5}
          lineHeight=".95"
          mt={[2]}
          fontWeight="900"
        >
          {post.title}
        </Heading>
      </Box>

      <Box style={{ position: `absolute`, bottom: `0` }} py={[3]}>
        <Share />
      </Box>
    </Box>
  )
}
