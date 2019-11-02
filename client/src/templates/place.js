import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"

import { StyledPage } from "../components/styles"

const StyledPlacePage = styled(StyledPage)`
  .place-title {
    text-align: center;
  }

  .image-wrapper {
    max-width: 1000px;
    margin: 0 auto;
  }
`

export default function Place({ data }) {
  const { sanityPlace } = data

  return (
    <StyledPlacePage>
      <h1 className="place-title">{sanityPlace.name}</h1>
      <div className="image-wrapper">
        <Img fluid={sanityPlace.image.asset.fluid} />
      </div>
    </StyledPlacePage>
  )
}

export const PLACE_PAGE_QUERY = graphql`
  query($slug: String!) {
    sanityPlace(slug: { current: { eq: $slug } }) {
      ...SanityPlaceFragment
    }
  }
`
