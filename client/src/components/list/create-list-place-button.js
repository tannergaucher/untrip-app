import {
  CREATE_LIST_PLACE_MUTATION,
  CURRENT_USER_QUERY,
  IS_IN_LIST,
} from "../apollo/graphql"

import React from "react"
import { useMutation } from "@apollo/react-hooks"

export default function CreateListPlaceButton({ list, place }) {
  const [createListPlace, { client }] = useMutation(
    CREATE_LIST_PLACE_MUTATION,
    {
      variables: {
        listId: list.id,
        sanityId: place.id,
        name: place.name,
        // change imageUrl to fluid
        imageUrl: JSON.stringify(place.image.asset.fluid),
        slug: place.slug.current,
        lat: place.location.lat,
        lng: place.location.lng,
      },
      refetchQueries: ["IS_IN_LIST"],

      optimisticResponse: {
        __typename: "Mutation",
        createListPlace: {
          __typename: "ListPlace",
          id: new Date(),
          sanityId: place.id,
          name: place.name,
          imageUrl: JSON.stringify(place.image.asset.fluid),
          slug: place.slug.current,
          lat: place.location.lat,
          lng: place.location.lng,
          list: {
            __typename: "List",
            id: list.id,
          },
        },
      },

      update: (cache, payload) => {
        try {
          const data = cache.readQuery({ query: CURRENT_USER_QUERY })

          const listIndex = data.me.lists.findIndex(
            list => list.id === payload.data.createListPlace.list.id
          )
          const updatedList = {
            ...data.me.lists[listIndex],
            places: [
              ...data.me.lists[listIndex].places,
              payload.data.createListPlace,
            ],
          }

          client.writeQuery({
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

          client.writeQuery({
            query: IS_IN_LIST,
            data: {
              isInList: true,
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
    }
  )

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        createListPlace()
      }}
      style={{
        color: `var(--grey)`,
        backgroundColor: `var(--bg-1)`,
      }}
    >
      {list.title}
    </button>
  )
}
