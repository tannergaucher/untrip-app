import React from "react"

import { UserListPlace } from "."

export default function UserListPlaces({ places }) {
  return (
    <>
      {places.map(place => (
        <UserListPlace key={place.id} place={place} />
      ))}
    </>
  )
}
