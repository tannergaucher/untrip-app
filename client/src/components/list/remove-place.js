import React from "react"
import { Button } from "../styles"

import { useMutation } from "@apollo/react-hooks"
import {
  REMOVE_FROM_LIST_MUTATION,
  CURRENT_USER_QUERY,
} from "../apollo/graphql"

export default function RemovePlace({ place, list }) {
  // Because need to get a listPlace db id, not cms
  const myList = list.places.filter(place => place.sanityId === place.sanityId)
  const [myPlace] = myList.filter(myPlace => myPlace.sanityId === place.id)

  const [removePlace] = useMutation(REMOVE_FROM_LIST_MUTATION, {
    variables: {
      listPlaceId: myPlace.id,
    },
    update: (cache, payload) => {
      const data = cache.readQuery({ query: CURRENT_USER_QUERY })

      console.log(payload)
      console.log(data)

      // const updatedListIndex = data.me.lists.findIndex(
      //   list => list.id === payload.data.removeFromList.list.id
      // )
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
