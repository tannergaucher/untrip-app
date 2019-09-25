import React from "react"

import { PlaceCard } from "../place"

export default function PostPlaces({ postPlaces }) {
  return (
    <>
      {postPlaces.map(postPlace => (
        <PlaceCard postPlace={postPlace} key={postPlace.place.id} />
      ))}
    </>
  )
}
