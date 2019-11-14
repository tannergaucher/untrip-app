import React from "react"
import { PlaceCard } from "."

export default function PostPlaces({ postPlaces, setPlaceInView, post }) {
  return (
    <>
      {postPlaces.map(postPlace => (
        <PlaceCard
          key={postPlace.place.id}
          postPlace={postPlace}
          setPlaceInView={setPlaceInView}
          post={post}
        />
      ))}
    </>
  )
}
