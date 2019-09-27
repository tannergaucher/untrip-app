import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import { Heading, Button } from "grommet"

import { CreateList, TogglePlaceCheckBox } from "../list"
import { Loading } from "../elements"
import { CURRENT_USER_QUERY } from "../apollo/graphql"

export default function UserLists({ place }) {
  const [show, setShow] = useState(false)
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <Loading message="Loading your untrips..." />
  if (error) return `Error: ${error.message}`

  return (
    <>
      {/* handle case of user not having any lists yet */}
      {data && data.me && data.me.lists.length === 0 && (
        <>
          <Heading level="5">Create a new list with {`${place.name}`}</Heading>
        </>
      )}
      {data && data.me && data.me.lists.length > 0 && (
        <Heading level="4">Add {place.name} to list</Heading>
      )}
      {data &&
        data.me &&
        data.me.lists.map(list => (
          <>
            <TogglePlaceCheckBox key={list.id} list={list} place={place} />
          </>
        ))}
      {!show && (
        <Button
          onClick={() => setShow(!show)}
          label="New List"
          margin={{ top: "medium" }}
        />
      )}
      {show && <CreateList place={place} setShow={setShow} />}
    </>
  )
}
