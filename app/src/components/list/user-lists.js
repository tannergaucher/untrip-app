import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import { Heading, Text, Box } from "rebass"

import { CreateList, TogglePlaceCheckBox } from "../list"
import { Button } from "../styles"
import { Loading } from "../elements"
import { CURRENT_USER_QUERY } from "../apollo/graphql"

export default function UserLists({ place }) {
  const [show, setShow] = useState(false)
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <Loading message="Loading your untrips..." />
  if (error) return `Error: ${error.message}`

  return (
    <>
      <Heading mb={[2]}>Add {place.name}...</Heading>
      {data &&
        data.me &&
        data.me.lists.map(list => (
          <TogglePlaceCheckBox key={list.id} list={list} place={place} />
        ))}
      {!show && (
        <Button width={[1]} mt={[3]} onClick={() => setShow(!show)}>
          New List
        </Button>
      )}
      {show && <CreateList place={place} setShow={setShow} />}
    </>
  )
}
