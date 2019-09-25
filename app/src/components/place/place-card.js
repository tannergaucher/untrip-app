import React from "react"
import Img from "gatsby-image"
import { Heading, Text, Box } from "grommet"

import BlockContent from "@sanity/block-content-to-react"

import { PlaceDetails } from "../place"
import { AddToListModal } from "../list"

export default function PlaceCard({ postPlace }) {
  return (
    <Box elevation="small" round="medium">
      <Box justify="between">
        <Heading>{postPlace.place.name}</Heading>
        <Text>{postPlace.place.placeType.type}</Text>
        {postPlace.place.tags.map(tag => (
          <Text key={tag.id}>{tag.tag}</Text>
        ))}
        <AddToListModal place={postPlace} />
      </Box>
      <Img fluid={postPlace.place.image.asset.fluid} />
      <Text>{postPlace.place.imageCaption}</Text>
      {/* TODO: position absolute photo credit over image */}
      <BlockContent blocks={postPlace._rawText} />
      <PlaceDetails place={postPlace} />
    </Box>
  )
}
