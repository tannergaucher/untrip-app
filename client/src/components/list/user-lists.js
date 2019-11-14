import React, { useState } from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"

import { Button } from "../styles"
import { AddPlace, RemovePlace } from "."
import { IS_IN_LIST, CURRENT_USER_QUERY } from "../apollo/graphql"
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
        <h4>Create a new list with {`${place.name}`}</h4>
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
        </>
      )}
      {show && <CreateListForm place={place} setShow={setShow} />}
    </StyledUserLists>
  )
}

function ToggleListPlace({ list, place }) {
  const { data } = useQuery(IS_IN_LIST, {
    variables: {
      places: list.places,
      placeSanityId: place.id,
    },
  })

  return data && data.isInList ? (
    <RemovePlace list={list} place={place} />
  ) : (
    <AddPlace list={list} place={place} />
  )
}
