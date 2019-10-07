import React from "react"
import Img from "gatsby-image"
import { navigate } from "gatsby"
import { Heading, Box, Anchor, Text } from "grommet"
import BlockContent from "@sanity/block-content-to-react"

import { PlaceDetails } from "../place"
import { AddToListModal } from "../list"

export default function PlaceCard({ postPlace }) {
  return (
    <Box elevation="large" round="small" margin={{ vertical: `large` }}>
      <Box direction="row" justify="between" align="center" pad="medium">
        <Box>
          <Heading level="6" margin="none" color="dark-1">
            {postPlace.place.placeType.type}
          </Heading>
          <Heading level="2" margin="none" color="black">
            {postPlace.place.name}
          </Heading>
        </Box>
        <AddToListModal place={postPlace} />
      </Box>
      <Img fluid={postPlace.place.image.asset.fluid} />
      <Box pad="medium" direction="row" wrap={true}>
        {postPlace.place.tags.map(tag => (
          <Anchor
            key={tag.id}
            onClick={() => {
              navigate(`/tags/${tag.slug.current}`)
            }}
          >
            <Text margin={{ right: "small" }}>#{tag.tag}</Text>
          </Anchor>
        ))}
      </Box>
      <Box pad={{ horizontal: "small" }}>
        <BlockContent blocks={postPlace._rawText} />
        <PlaceDetails place={postPlace} />
      </Box>
    </Box>
  )
}
