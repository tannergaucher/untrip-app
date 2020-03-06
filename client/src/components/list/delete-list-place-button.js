import {
  CURRENT_USER_QUERY,
  DELETE_LIST_PLACE_MUTATION,
  IS_IN_LIST,
} from "../apollo/graphql"

import React from "react"
import { useMutation } from "@apollo/react-hooks"

export default function DeleteListPlaceButton({ list, place, text }) {
  const [deleteListPlace] = useMutation(DELETE_LIST_PLACE_MUTATION, {
    variables: {
      listId: list.id,
      listPlaceSanityId: place.id,
    },

    optimisticResponse: {
      __typename: "Mutation",
      deleteListPlace: {
        __typename: "ListPlace",
        id: place.id,
      },
    },
    refetchQueries: ["IS_IN_LIST"],
    update: (cache, payload) => {
      try {
        const data = cache.readQuery({ query: CURRENT_USER_QUERY })
        const listIndex = data.me.lists.findIndex(
          cacheList => cacheList.id === list.id
        )

        const updatedList = {
          ...data.me.lists[listIndex],
          places: data.me.lists[listIndex].places.filter(
            cacheListPlace =>
              cacheListPlace.id !== payload.data.deleteListPlace.id
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

        cache.writeQuery({
          query: IS_IN_LIST,
          data: {
            isInList: false,
          },

          variables: {
            listId: list.id,
            placeSanityId: place.id,
          },
        })
      } catch (error) {
        console.log(error)
      }
    },
  })

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        deleteListPlace()
      }}
    >
      {text}
    </button>
  )
}
