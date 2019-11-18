import React, { useState } from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"

import { Button } from "../styles"
import { AddPlace, RemovePlace } from "."
import { CURRENT_USER_QUERY } from "../apollo/graphql"
import { CreateListForm } from "../list"

const StyledUserLists = styled.div`
  /* Override grommet. */
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
        <>
          <h4>Create a new list with {`${place.name}`}</h4>
          <CreateListForm place={place} setShow={setShow} />
        </>
      ) : (
        <h4>Add {place.name} to list</h4>
      )}
      {data &&
        data.me &&
        data.me.lists.map(list => (
          <ToggleListPlace key={list.id} list={list} place={place} />
        ))}
      {!show && (
        <>
          <br />
          {data && data.me && data.me.lists.length > 0 && (
            <Button
              onClick={() => setShow(!show)}
              style={{
                marginTop: `1.5rem`,
                color: `var(--accent)`,
                borderColor: `var(--accent)`,
              }}
            >
              New List
            </Button>
          )}
        </>
      )}
      {show && <CreateListForm place={place} setShow={setShow} />}
    </StyledUserLists>
  )
}

function ToggleListPlace({ list, place }) {
  const { data } = useQuery(CURRENT_USER_QUERY)

  const listIndex = data.me.lists.findIndex(
    cacheList => cacheList.id === list.id
  )

  const testList = data.me.lists[listIndex]

  const [isInList] = testList.places.filter(
    listPlace => listPlace.sanityId === place.id
  )

  // get listPlace
  const myList = list.places.filter(place => place.sanityId === place.sanityId)
  const [listPlace] = myList.filter(myPlace => myPlace.sanityId === place.id)

  return isInList ? (
    <RemovePlace list={list} listPlace={listPlace} />
  ) : (
    <AddPlace list={list} place={place} />
  )
}
