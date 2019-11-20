import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import { useInView } from "react-intersection-observer"

import { PlaceDetails } from "../place"
import { AddToListModal } from "../list"
import { Divider, Link } from "../styles"

const StyledPlace = styled.div`
  margin-bottom: 2rem;

  .place-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 2rem 0;
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

  .place-tag {
    margin: 0;
    margin-right: 1rem;
    text-transform: uppercase;
  }

  @media (max-width: 600px) {
    margin-bottom: 1rem;

    .place-info {
      margin-bottom: 0.5rem;
    }

    .place-name {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    .place-tags {
      margin: 1.5rem 0;
    }
  }
`

export default function PlaceCard({ postPlace, setPlaceInView, post }) {
  const [ref, inView] = useInView({
    threshold: 0,
  })

  if (inView) {
    setPlaceInView(postPlace.place)
  }

  return (
    <StyledPlace>
      <div className="place-info">
        <div className="place-name-type" ref={ref}>
          <h2 className="place-name">{postPlace.place.name}</h2>
        </div>
        <AddToListModal place={postPlace} />
      </div>
      <Img fluid={postPlace.place.image.asset.fluid} />
      <div className="place-tags">
        {postPlace.place.tags.map(tag => (
          <Link
            plain="true"
            key={tag.slug.current}
            to={`/tags/${tag.slug.current}`}
          >
            <h5 className="place-tag">{tag.tag}</h5>
          </Link>
        ))}
      </div>
      <BlockContent blocks={postPlace._rawText} />
      <PlaceDetails place={postPlace} post={post} />
      {/* <Divider /> */}
    </StyledPlace>
  )
}
