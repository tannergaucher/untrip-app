import React from "react"
import Img from "gatsby-image"
import { Heading, Flex, Box, Text, Card } from "rebass"

import { PlaceDetails } from "../place"
import { AddToListModal } from "../list"
import { BlockContent } from "../styles"

export default function PlaceCard({ postPlace }) {
  return (
    <Card
      mb={[5]}
      p={[2]}
      boxShadow="0px 4px 12px rgba(0, 0, 0, .2)"
      borderRadius="10px"
    >
      <Flex justifyContent="space-between" alignItems="center" mb={[3]}>
        <Box px={[2]}>
          <Heading fontSize={[4]} fontWeight="900">
            {postPlace.place.name}
          </Heading>
          <Flex flexWrap="wrap">
            <Heading fontSize={[1]} fontWeight="100" mr={[2]}>
              {postPlace.place.placeType.type}
            </Heading>
            {postPlace.place.tags.map(tag => (
              <Heading fontSize={[1]} fontWeight="100" key={tag.id} mr={[2]}>
                {tag.tag}
              </Heading>
            ))}
          </Flex>
        </Box>
        <AddToListModal place={postPlace} />
      </Flex>
      <Img fluid={postPlace.place.image.asset.fluid} />
      <Text
        fontWeight="lighter"
        fontSize={[2]}
        mt={[3]}
        mb={[4]}
        style={{ fontStyle: `italic` }}
      >
        {postPlace.place.imageCaption}
      </Text>
      {/* TODO: position absolute photo credit over image */}
      <BlockContent blocks={postPlace._rawText} />
      <PlaceDetails place={postPlace} />
    </Card>
  )
}
