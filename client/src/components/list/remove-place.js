import React from "react"
import { Button } from "../styles"

import { useMutation } from "@apollo/react-hooks"
import {
  REMOVE_FROM_LIST_MUTATION,
  CURRENT_USER_QUERY,
} from "../apollo/graphql"

export default function RemovePlace({ list, listPlace }) {
  const [removeFromList] = useMutation(REMOVE_FROM_LIST_MUTATION, {
    variables: {
      // Because listPlace gets deleted from cache, leading to undefined error
      listPlaceId: listPlace ? listPlace.id : "",
    },
    optimisticResponse: {
      __typename: "Mutation",
      removeFromList: {
        __typename: "ListPlace",
        id: listPlace.id,
      },
    },

    update: (cache, payload) => {
      try {
        const data = cache.readQuery({ query: CURRENT_USER_QUERY })
        const listIndex = data.me.lists.findIndex(
          cacheList => cacheList.id === list.id
        )

        // Because can't mutate data.
        const updatedList = {
          ...data.me.lists[listIndex],
          places: data.me.lists[listIndex].places.filter(
            cacheListPlace =>
              cacheListPlace.id !== payload.data.removeFromList.id
          ),
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
                ...data.me.lists.slice(listIndex + 1),
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
      primary="true"
      onClick={() => removeFromList()}
      style={{ marginTop: `var(--space-sm)`, marginRight: `var(--space-sm)` }}
    >
      {list.title}
    </Button>
  )
}
