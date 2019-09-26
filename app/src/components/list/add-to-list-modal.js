import React, { useState } from "react"
import { AddCircle } from "grommet-icons"

import { useQuery } from "@apollo/react-hooks"
import { Layer, Button, Heading, Box } from "grommet"

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
        plain={true}
        onClick={() => setShow(!show)}
        icon={<AddCircle color="black" />}
      />

      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          responsive={false}
          full="horizontal"
          margin="small"
        >
          <Box pad="medium">
            {data && data.isLoggedIn ? (
              <UserLists place={place.place} />
            ) : (
              <PleaseSignIn />
            )}
          </Box>
        </Layer>
      )}
    </>
  )
}

function PleaseSignIn() {
  return (
    <>
      <Heading level="4" textAlign="center">
        You must be logged in to do that
      </Heading>
      <AuthTabs />
    </>
  )
}
