import { CREATE_LIST_MUTATION, CURRENT_USER_QUERY } from "../apollo/graphql"
import React, { useState } from "react"

import { useMutation } from "@apollo/react-hooks"

export default function CreateList({ place, setShowModal }) {
  const [title, setTitle] = useState("")
  const [createList, { loading }] = useMutation(CREATE_LIST_MUTATION, {
    variables: {
      title,
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
    <fieldset className="fieldset" disabled={loading && true}>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault()
          createList()
          setTitle("")
        }}
      >
        <input
          className="input"
          value={title}
          required={true}
          disabled={loading}
          placeholder="List Name"
          onChange={e => setTitle(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="submit"
          loading={loading && true}
        >
          Create List
        </button>
      </form>
    </fieldset>
  )
}
