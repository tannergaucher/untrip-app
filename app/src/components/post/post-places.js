import React from "react"

import { PlaceCard } from "../place"

// TODO Co-locate where used
export default function PostPlaces({ postPlaces, setInView }) {
  return (
    <>
      {postPlaces.map(postPlace => (
        <PlaceCard
          postPlace={postPlace}
          key={postPlace.place.id}
          setInView={setInView}
        />
      ))}
    </>
  )
}
