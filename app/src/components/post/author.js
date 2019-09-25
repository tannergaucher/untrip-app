import React from "react"
import Img from "gatsby-image"
import { Box, Heading, Anchor } from "grommet"

export default function Author({ author }) {
  return (
    <Box direction="row" align="center">
      <Img fixed={author.image.asset.fixed} style={{ borderRadius: `100%` }} />
      <Box margin={{ left: "small" }}>
        <Heading level="4" margin="none">
          {author.name}
        </Heading>
        <Anchor
          href={`${author.social.site.siteUrl}/${author.social.handle}`}
          label={`@${author.social.handle}`}
        />
      </Box>
    </Box>
  )
}
