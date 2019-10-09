import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default function Place({ data }) {
  const { sanityPlace } = data

  return (
    <div>
      <h3>{sanityPlace.name}</h3>
      <Img fluid={sanityPlace.image.asset.fluid} />
      <p>{sanityPlace.imageCaption}</p>
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
