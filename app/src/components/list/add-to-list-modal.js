import React, { useState } from "react"
import { AddCircle } from "grommet-icons"
import { Button, Heading, Flex } from "rebass"
import { useQuery } from "@apollo/react-hooks"
import { Layer } from "grommet"

import { IS_LOGGED_IN } from "../apollo/graphql"
import { AuthTabs } from "../auth"
import { UserLists } from "../list"

export default function AddToListModal({ place }) {
  const [show, setShow] = useState(false)
  const { error, loading, data } = useQuery(IS_LOGGED_IN)

  if (loading) return `Loading...`
  if (error) return `Error: ${error.message}`

  return (
    <>
      <Button
        bg="var(--light-1)"
        color="var(--dark-1)"
        onClick={() => setShow(!show)}
      >
        <AddCircle color="var(--dark-1)" />
      </Button>
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          responsive={false}
        >
          <Flex flexDirection="column" p={[2, 4]}>
            {data && data.isLoggedIn ? (
              <UserLists place={place.place} />
            ) : (
              <PleaseSignIn />
            )}
          </Flex>
        </Layer>
      )}
    </>
  )
}

function PleaseSignIn() {
  return (
    <>
      <Heading>You must be logged in to do that.</Heading>
      <AuthTabs />
    </>
  )
}
