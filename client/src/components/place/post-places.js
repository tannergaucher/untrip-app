import { PlaceCard } from "."
import React from "react"

export default function PostPlaces({ postPlaces, setPlaceInView, post }) {
  return (
    <section className="padding">
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `1fr`,
          gap: `var(--space-lg)`,
        }}
      >
        {postPlaces.map(postPlace => (
          <PlaceCard
            key={postPlace.place.id}
            postPlace={postPlace}
            setPlaceInView={setPlaceInView}
            post={post}
          />
        ))}
      </div>
    </section>
  )
}
