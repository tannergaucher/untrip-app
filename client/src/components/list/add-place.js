import React from "react"

import { Button } from "../styles"
import { useMutation } from "@apollo/react-hooks"
import {
  ADD_TO_LIST_MUTATION,
  CURRENT_USER_QUERY,
  IS_IN_LIST,
} from "../apollo/graphql"

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
    // optimisticResponse: {
    //   typename: "Mutation",
    //   addToList: {
    //     __typename: "ListPlace",
    //     id: new Date(),
    //     sanityId: place.id,
    //     name: place.name,
    //     imageUrl: JSON.stringify(place.image.asset.fluid),
    //     slug: place.slug.current,
    //     lat: place.location.lat,
    //     lng: place.location.lng,
    //   },
    // },
    update: (cache, payload) => {
      const data = { ...cache.readQuery({ query: CURRENT_USER_QUERY }) }

      // get the index of the list to be updated
      const updatedListIndex = data.me.lists.findIndex(
        list => list.id === payload.data.addToList.list.id
      )

      // add place to list
      data.me.lists[updatedListIndex].places = [
        ...data.me.lists[updatedListIndex].places,
        payload.data.addToList,
      ]

      // write data back to cache
      cache.writeQuery({ query: CURRENT_USER_QUERY, data })
    },
    refetchQueries: [
      {
        query: IS_IN_LIST,
        variables: {
          listId: list.id,
          placeSanityId: place.id,
        },
      },
    ],
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
