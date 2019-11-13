import React, { useState } from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"

import { Button } from "../styles"
import { CreateListForm } from "../list"
import {
  CURRENT_USER_QUERY,
  ADD_TO_LIST_MUTATION,
  IS_IN_LIST,
} from "../apollo/graphql"

const StyledUserLists = styled.div`
  /* Need to override grommet. */
  color: var(--black);
`

export default function UserLists({ place }) {
  const [show, setShow] = useState(false)
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return `Loading...`
  if (error) return `Error: ${error.message}`

  return (
    <StyledUserLists>
      {data && data.me && data.me.lists.length === 0 ? (
        <h4>Create a new list with {`${place.name}`}</h4>
      ) : (
        <h4>Add {place.name} to list</h4>
      )}
      {data &&
        data.me &&
        data.me.lists.map(list => (
          <TogglePlace key={list.id} list={list} place={place} />
        ))}
      {show ? (
        <CreateListForm place={place} setShow={setShow} />
      ) : (
        <>
          <br />
          <Button
            onClick={() => setShow(!show)}
            style={{ color: `red`, marginTop: `1rem` }}
          >
            New List
          </Button>
        </>
      )}
    </StyledUserLists>
  )
}

function TogglePlace({ place, list }) {
  const { data } = useQuery(IS_IN_LIST, {
    variables: {
      places: list.places,
      placeSanityId: place.id,
    },
  })

  console.log(data)

  return data && data.isInList ? (
    <DeletePlace place={place} list={list} />
  ) : (
    <AddPlace place={place} list={list} />
  )
}

function AddPlace({ place, list }) {
  const [addToList, { loading, error }] = useMutation(ADD_TO_LIST_MUTATION, {
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
        list: {
          __typename: "List",
          id: list.id,
        },
      },
    },
    update: (cache, payload) => {
      const data = cache.readQuery({ query: CURRENT_USER_QUERY })
      // do updates
      // cache.writeQuery({ query: CURRENT_USER_QUERY, data })
    },
  })

  return (
    <Button
      style={{ marginTop: `.5rem`, marginRight: `.5rem` }}
      // loading={loading}
      onClick={() => {
        addToList()
      }}
    >
      {list.title}
    </Button>
  )
}

function DeletePlace({ place, list }) {
  // removefromlist mutation

  return (
    <Button
      primary
      style={{ marginTop: `.5rem`, marginRight: `.5rem` }}
      disabled
    >
      {list.title}
    </Button>
  )
}
