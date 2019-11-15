import React from "react"

import { Button } from "../styles"
import { useMutation } from "@apollo/react-hooks"
import { ADD_TO_LIST_MUTATION, CURRENT_USER_QUERY } from "../apollo/graphql"

export default function AddPlace({ place, list }) {
  const [addToList] = useMutation(ADD_TO_LIST_MUTATION, {
    variables: {
      listId: list.id,
      sanityId: place.id,
      name: place.name,
      imageUrl: JSON.stringify(place.image.asset.fluid),
      slug: place.slug.current,
      lat: place.location.lat,
      lng: place.location.lng,
    },
    update: (cache, payload) => {
      try {
        const data = cache.readQuery({ query: CURRENT_USER_QUERY })

        // find index of my list where the id === payload.data.addToList.id
        const listIndex = data.me.lists.findIndex(
          list => list.id === payload.data.addToList.list.id
        )

        // add listPlace to that list
        data.me.lists[listIndex].places = data.me.lists[
          listIndex
        ].places.concat(payload.data.addToList)

        console.log(data)

        // write data back to cache
        cache.writeQuery({ query: CURRENT_USER_QUERY, data })
      } catch (error) {
        console.log(error)
      }
    },
  })

  return (
    <Button
      style={{ marginTop: `.5rem`, marginRight: `.5rem` }}
      onClick={() => {
        addToList()
      }}
    >
      {list.title}
    </Button>
  )
}
