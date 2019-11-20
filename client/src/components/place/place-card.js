import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import { useInView } from "react-intersection-observer"

import { PlaceDetails } from "../place"
import { AddToListModal } from "../list"
import { Link } from "../styles"

const StyledPlace = styled.div`
  margin-bottom: var(--space-lg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: calc(var(--radius) * 2);

  .place-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-sm);
  }

  .place-name {
    margin-top: var(--space-sm);
  }

  .place-content {
    padding: var(--space-sm);
  }

  .place-tags {
    display: flex;
  }

  .place-tag {
    margin-right: var(--space-md);
    text-transform: uppercase;
    font-weight: bold;
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
      <Img
        fluid={postPlace.place.image.asset.fluid}
        style={{ marginBottom: `var(--space-md)` }}
      />

      <div className="place-content">
        <div className="place-tags">
          {postPlace.place.tags.map(tag => (
            <Link
              plain="true"
              key={tag.slug.current}
              to={`/tags/${tag.slug.current}`}
            >
              <small className="place-tag">{tag.tag}</small>
            </Link>
          ))}
        </div>
        <BlockContent blocks={postPlace._rawText} />
        <br />
        <PlaceDetails place={postPlace} post={post} />
      </div>
    </StyledPlace>
  )
}
