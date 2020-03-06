import { AddPlaceToListModal } from "../list"
import BlockContent from "@sanity/block-content-to-react"
import Img from "gatsby-image"
import React from "react"
import { kebabCase } from "lodash"

export default function PlaceCard({ postPlace }) {
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
      <h2 className="card-heading title" id={kebabCase(postPlace.place.name)}>
        {postPlace.place.name}
      </h2>
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
