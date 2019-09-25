import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Heading, Text } from "grommet"

export default function Place({ data }) {
  const { sanityPlace } = data

  return (
    <div>
      <Heading>{sanityPlace.name}</Heading>
      <Img fluid={sanityPlace.image.asset.fluid} />
      <Text>{sanityPlace.imageCaption}</Text>
      <Link to={sanityPlace.imageLink}>By {sanityPlace.imageCredit}</Link>
    </div>
  )
}

export const PLACE_PAGE_QUERY = graphql`
  query($slug: String!) {
    sanityPlace(slug: { current: { eq: $slug } }) {
      ...SanityPlaceFragment
    }
  }
`
