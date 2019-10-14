import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"

import { CreateList, TogglePlaceCheckBox } from "../list"
import { Loading } from "../elements"
import { CURRENT_USER_QUERY } from "../apollo/graphql"
import { Button } from "../styles"

const StyledUserLists = styled.div`
  color: black;
`

export default function UserLists({ place }) {
  const [show, setShow] = useState(false)
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <Loading message="Loading your untrips..." />
  if (error) return `Error: ${error.message}`

  return (
    <StyledUserLists>
      {data && data.me && data.me.lists.length === 0 ? (
        <>
          <h4>Create a new list with {`${place.name}`}</h4>
        </>
      ) : (
        <h4>Add {place.name} to list</h4>
      )}

      {data &&
        data.me &&
        data.me.lists.map(list => (
          <>
            <TogglePlaceCheckBox key={list.id} list={list} place={place} />
          </>
        ))}

      {show ? (
        <CreateList place={place} setShow={setShow} />
      ) : (
        <Button onClick={() => setShow(!show)}>New List</Button>
      )}
    </StyledUserLists>
  )
}
