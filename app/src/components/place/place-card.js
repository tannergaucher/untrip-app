import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Heading, Text, Box } from "grommet"

import BlockContent from "@sanity/block-content-to-react"

import { PlaceDetails } from "../place"
import { AddToListModal } from "../list"

export default function PlaceCard({ postPlace }) {
  return (
    <Box elevation="large" round="small" margin={{ vertical: `large` }}>
      <Box direction="row" justify="between" align="center" pad="medium">
        <Box>
          <Heading level="6" margin="none" color="dark-3">
            {postPlace.place.placeType.type}
          </Heading>
          <Heading level="2" margin="none">
            {postPlace.place.name}
          </Heading>
        </Box>
        <AddToListModal place={postPlace} />
      </Box>
      <Img fluid={postPlace.place.image.asset.fluid} />

      <Box pad="medium" direction="row" wrap={true}>
        {postPlace.place.tags.map(tag => (
          <Link
            key={tag.id}
            to={`/tags/${tag.slug.current}`}
            style={{ color: `inherit` }}
          >
            <Text margin={{ right: "small" }}>#{tag.tag}</Text>
          </Link>
        ))}
      </Box>

      <Box pad="small">
        <BlockContent blocks={postPlace._rawText} />
        <PlaceDetails place={postPlace} />
      </Box>
    </Box>
  )
}
