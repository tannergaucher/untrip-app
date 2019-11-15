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
        const listIndex = data.me.lists.findIndex(
          list => list.id === payload.data.addToList.list.id
        )

        const updatedList = {
          ...data.me.lists[listIndex],
          places: [...data.me.lists[listIndex].places, payload.data.addToList],
        }

        cache.writeQuery({
          query: CURRENT_USER_QUERY,
          data: {
            ...data,
            me: {
              ...data.me,
              lists: [
                ...data.me.lists.slice(0, listIndex),
                updatedList,
                ...data.me.lists.slice(listIndex + 1, data.me.lists.length),
              ],
            },
          },
        })
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
