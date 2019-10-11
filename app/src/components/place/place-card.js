import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import { useInView } from "react-intersection-observer"

import { PlaceDetails } from "../place"
import { Divider } from "../styles"
import { AddToListModal } from "../list"

const StyledPlace = styled.div`
  margin-bottom: 6rem;

  .place-info {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0 1rem 0;
  }

  .place-details {
  }

  .place-type {
    margin: 0;
    color: grey;
  }

  .place-name {
    margin: 0;
  }

  .place-tags {
    display: flex;
    margin: 2rem 0;
  }

  .place-tags > a {
    margin-right: 1rem;

    h5 {
      margin: 0;
    }
  }

  @media (max-width: 600px) {
    margin-bottom: 4rem;
  }
`

export default function PlaceCard({ postPlace, setInView }) {
  const [ref, inView] = useInView({
    threshold: 0,
  })

  if (inView) {
    setInView(postPlace.place)
  }

  return (
    <StyledPlace>
      <div className="place-info">
        <div className="place-details" ref={ref}>
          <h5 className="place-type">{postPlace.place.placeType.type}</h5>
          <h2 className="place-name">{postPlace.place.name}</h2>
        </div>
        <AddToListModal place={postPlace} />
      </div>
      <Img fluid={postPlace.place.image.asset.fluid} />
      <div className="place-tags">
        {postPlace.place.tags.map(tag => (
          <Link key={tag.id} to={`/tags/${tag.slug.current}`}>
            <h5>#{tag.tag}</h5>
          </Link>
        ))}
      </div>
      <BlockContent blocks={postPlace._rawText} />
      <PlaceDetails place={postPlace} />
      <Divider />
    </StyledPlace>
  )
}
