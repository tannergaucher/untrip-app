import React, { useState } from "react"
import styled from "styled-components"
import { useQuery, useMutation } from "@apollo/react-hooks"

import { Button } from "../styles"
import { CreateListForm } from "../list"
import {
  IS_IN_LIST,
  CURRENT_USER_QUERY,
  ADD_TO_LIST_MUTATION,
  REMOVE_FROM_LIST_MUTATION,
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
            style={{
              borderColor: `var(--accent)`,
              color: `var(--accent)`,
              marginTop: `1.5rem`,
            }}
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

  return data && data.isInList ? (
    <RemovePlace place={place} list={list} />
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
      console.log(payload)
      console.log(data)
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

function RemovePlace({ place, list }) {
  // Becuase need to get a listPlace id from db, not cms
  const myList = list.places.filter(place => place.sanityId === place.sanityId)
  const [myPlace] = myList.filter(myPlace => myPlace.sanityId === place.id)

  const [removePlace] = useMutation(REMOVE_FROM_LIST_MUTATION, {
    variables: {
      listPlaceId: myPlace.id,
    },
  })

  return (
    <Button
      primary="true"
      onClick={() => removePlace()}
      style={{ marginTop: `.5rem`, marginRight: `.5rem` }}
    >
      {list.title}
    </Button>
  )
}
