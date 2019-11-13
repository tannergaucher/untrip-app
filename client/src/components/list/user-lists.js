import React, { useState } from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"

import { Button } from "../styles"
import { CURRENT_USER_QUERY } from "../apollo/graphql"
import { CreateListForm, ToggleListplaceCheckbox } from "../list"

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
      {/* User doesn't have any lists yet. */}
      {data && data.me && data.me.lists.length === 0 ? (
        <h4>Create a new list with {`${place.name}`}</h4>
      ) : (
        <h4>Add {place.name} to list</h4>
      )}
      {data &&
        data.me &&
        data.me.lists &&
        data.me.lists.map(list => (
          <ToggleListplaceCheckbox key={list.id} list={list} place={place} />
        ))}
      {show ? (
        <CreateListForm place={place} setShow={setShow} />
      ) : (
        <Button onClick={() => setShow(!show)}>New List</Button>
      )}
    </StyledUserLists>
  )
}
