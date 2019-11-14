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
    optimisticResponse: {
      typename: "Mutation",
      addToList: {
        __typename: "ListPlace",
        id: new Date(),
        sanityId: place.id,
        name: place.name,
        imageUrl: JSON.stringify(place.image.asset.fluid),
        slug: place.slug.current,
        lat: place.location.lat,
        lng: place.location.lng,
      },
    },
    update: (cache, payload) => {
      const data = cache.readQuery({ query: CURRENT_USER_QUERY })
      console.log(payload)
      console.log(data)
      // filter the right list from data.me.lists
      // concat payload.data.addToList to that list
      // write data back to cache
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
