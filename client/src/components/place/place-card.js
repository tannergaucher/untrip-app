import { AddPlaceToListModal } from "../list"
import BlockContent from "@sanity/block-content-to-react"
import Img from "gatsby-image"
import React from "react"

export default function PlaceCard({ postPlace, setPlaceInView, post }) {
  return (
    <div className="card">
      <Img
        fluid={postPlace.place.image.asset.fluid}
        style={{
          marginBottom: `var(--space-md)`,
          borderTopLeftRadius: `var(--radius)`,
          borderTopRightRadius: `var(--radius)`,
        }}
      />
      <h3 className="card-heading title">{postPlace.place.name}</h3>
      <div style={{ display: `flex` }}>
        {postPlace.place.tags.map(tag => (
          <small className="place-tag card-text" key={tag.id}>
            {tag.tag}
          </small>
        ))}
      </div>
      <div className="padding">
        <BlockContent blocks={postPlace._rawText} />
        <br />
        <AddPlaceToListModal place={postPlace} />
      </div>
    </div>
  )
}
