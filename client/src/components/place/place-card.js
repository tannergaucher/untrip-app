import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import { useInView } from "react-intersection-observer"

import { PlaceDetails } from "../place"
import { Divider, Link } from "../styles"
import { AddToListModal } from "../list"

const StyledPlace = styled.div`
  margin-bottom: 2rem;

  .place-info {
    display: flex;
    justify-content: space-between;
    margin: 0 0 1.5rem 0;
  }

  .place-type {
    margin: 0;
    text-transform: uppercase;
  }

  .place-name {
    margin: 0;
    margin-top: 0.25rem;
    font-weight: 900;
  }

  .place-tags {
    display: flex;
    margin: 1.5rem 0;
  }

  .place-tags > a {
    margin-right: 1rem;

    h5 {
      margin: 0;
      text-transform: uppercase;
    }
  }

  @media (max-width: 600px) {
    margin-bottom: 3rem;
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
          {/* <h5 className="place-type">{postPlace.place.placeType.type}</h5> */}
          <h2 className="place-name">
            {postPlace.place.name} / {postPlace.place.placeType.type}
          </h2>
        </div>
        <AddToListModal place={postPlace} />
      </div>
      <Img fluid={postPlace.place.image.asset.fluid} />
      <div className="place-tags">
        {postPlace.place.tags.map(tag => (
          <Link key={tag.id} to={`/tags/${tag.slug.current}`} plain>
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
