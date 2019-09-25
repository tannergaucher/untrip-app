import React from "react"
import Img from "gatsby-image"
import { Box, Heading, Anchor } from "grommet"

export default function Author({ author }) {
  return (
    <Box>
      <Img fixed={author.image.asset.fixed} style={{ borderRadius: `100%` }} />
      <Heading level="2">{author.name}</Heading>
      <Anchor
        href={`${author.social.site.siteUrl}/${author.social.handle}`}
        label={`@${author.social.handle}`}
      />
    </Box>
  )
}
