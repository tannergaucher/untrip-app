import React from "react"
import { Button } from "../styles"

import { useMutation } from "@apollo/react-hooks"
import { REMOVE_FROM_LIST_MUTATION } from "../apollo/graphql"

export default function RemovePlace({ place, list }) {
  // Because need to get a listPlace db id, not cms
  const myList = list.places.filter(place => place.sanityId === place.sanityId)
  const [myPlace] = myList.filter(myPlace => myPlace.sanityId === place.id)

  const [removePlace] = useMutation(REMOVE_FROM_LIST_MUTATION, {
    variables: {
      listPlaceId: myPlace.id,
    },
  })

  return (
    <Button
      primary="true"
      onClick={() => removePlace()}
      style={{ marginTop: `.5rem`, marginRight: `.5rem` }}
    >
      {list.title}
    </Button>
  )
}
