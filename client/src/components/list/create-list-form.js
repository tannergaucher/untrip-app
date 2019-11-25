import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"

import { Button, Input, Form } from "../styles"
import { CREATE_LIST_MUTATION, CURRENT_USER_QUERY } from "../apollo/graphql"

export default function CreateList({ place, setShowModal }) {
  const [title, setTitle] = useState("")
  const [createList, { loading }] = useMutation(CREATE_LIST_MUTATION, {
    variables: {
      title,
      sanityId: place.id,
      name: place.name,
      imageUrl: JSON.stringify(place.image.asset.fixed),
      slug: place.slug.current,
      lat: place.location.lat,
      lng: place.location.lng,
    },
    update: (cache, payload) => {
      try {
        const data = cache.readQuery({ query: CURRENT_USER_QUERY })
        cache.writeQuery({
          query: CURRENT_USER_QUERY,
          data: {
            ...data,
            me: {
              ...data.me,
              lists: [...data.me.lists, payload.data.createList],
            },
          },
        })
      } catch (error) {
        console.log(error)
      }
    },

    optimisticResponse: {
      __typename: "Mutation",
      createList: {
        __typename: "List",
        id: new Date(),
        title,
        places: [
          {
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
              id: new Date(),
            },
          },
        ],
      },
    },
  })

  return (
    <Form
      onSubmit={e => {
        e.preventDefault()
        createList()
        setShowModal(false)
      }}
    >
      <Input
        value={title}
        required={true}
        placeholder="List Name"
        onChange={e => setTitle(e.target.value)}
        style={{
          marginTop: `var(--space-md)`,
        }}
      />
      <Button type="submit" loading={loading} primary>
        Create List
      </Button>
    </Form>
  )
}
