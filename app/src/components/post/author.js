import React from "react"
import Img from "gatsby-image"
import { Flex, Heading } from "rebass"

export default function Author({ author }) {
  return (
    <Flex alignItems="center">
      <Flex alignItems="center">
        <Img
          fixed={author.image.asset.fixed}
          style={{ borderRadius: `100%` }}
        />
      </Flex>
      <Flex ml={[2]} flexDirection="column">
        <Heading fontSize={[1]} fontWeight="lighter">
          {author.name}
        </Heading>
        <a href={`${author.social.site.siteUrl}/${author.social.handle}`}>
          <Heading fontSize={[1]} fontWeight="lighter">
            {`@${author.social.handle}`}
          </Heading>
        </a>
      </Flex>
    </Flex>
  )
}
