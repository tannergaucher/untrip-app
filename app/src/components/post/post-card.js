import React from "react"
import Img from "gatsby-image"
import { Heading, Card } from "rebass"

export default function PostCard({ post }) {
  return (
    <Card mb={[4]} p={[2]}>
      <Img fluid={post.mainImage.asset.fluid} />

      <Heading fontSize={[2]} mt={[2]} fontWeight="400">
        {post.category.category}
      </Heading>
      <Heading fontSize={[4]} lineHeight="1.1" fontWeight="900" mt={[2]}>
        {post.title}
      </Heading>
    </Card>
  )
}
