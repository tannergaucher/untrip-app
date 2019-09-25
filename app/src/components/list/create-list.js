import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import { Form, FormField, Button, Box } from "grommet"

import { CREATE_LIST_MUTATION, CURRENT_USER_QUERY } from "../apollo/graphql"

export default function CreateList({ place, setShow }) {
  const [listTitle, setListTitle] = useState("")
  const [createList] = useMutation(CREATE_LIST_MUTATION, {
    variables: {
      title: listTitle,
      placeSanityId: place.id,
      placeName: place.name,
      placeImageUrl: JSON.stringify(place.image.asset.fluid),
      placeSlug: place.slug.current,
      lat: place.location.lat,
      lng: place.location.lng,
    },

    update: (cache, payload) => {
      const data = cache.readQuery({ query: CURRENT_USER_QUERY })
      data.me.lists = [...data.me.lists, payload.data.createList]
      cache.writeQuery({ query: CURRENT_USER_QUERY, data })
    },
    optimisticResponse: {
      __typename: "Mutation",
      createList: {
        __typename: "List",
        id: new Date(),
        title: listTitle,
        places: [
          {
            __typename: "Place",
            id: new Date(),
            placeSanityId: place.id,
            placeName: place.name,
            placeImageUrl: JSON.stringify(place.image.asset.fluid),
            placeSlug: place.slug.current,
            lat: place.location.lat,
            lng: place.location.lng,
          },
        ],
      },
    },
  })

  return (
    <Form
      onSubmit={async e => {
        e.preventDefault()
        setShow(false)
        await createList()
      }}
    >
      <FormField
        name="List Name"
        value={listTitle}
        onChange={e => setListTitle(e.target.value)}
        required={true}
      />

      <Button
        type="submit"
        label="Create List"
        margin={{ top: "small" }}
        fill={true}
      />
    </Form>
  )
}
