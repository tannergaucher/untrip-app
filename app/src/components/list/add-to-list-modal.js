import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import { Layer } from "grommet"
import { Bookmark } from "grommet-icons"
import styled from "styled-components"

import { AuthTabs } from "../auth"
import { UserLists } from "../list"
import { Button } from "../styles"
import { IS_LOGGED_IN } from "../apollo/graphql"

const PlainBtn = styled(Button)`
  border: none;

  &:hover {
    border: 1px solid black;
    background: white;
  }
`

export default function AddToListModal({ place }) {
  const [show, setShow] = useState(false)
  const { error, loading, data } = useQuery(IS_LOGGED_IN)

  if (loading) return `Loading...`
  if (error) return `Error: ${error.message}`

  return (
    <>
      <PlainBtn onClick={() => setShow(!show)}>
        <Bookmark color="black" />
      </PlainBtn>

      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          responsive={false}
          full="horizontal"
          margin="small"
        >
          <div>
            {data && data.isLoggedIn ? (
              <UserLists place={place.place} />
            ) : (
              <PleaseSignIn />
            )}
          </div>
        </Layer>
      )}
    </>
  )
}

function PleaseSignIn() {
  return (
    <>
      <h4>You must be logged in to do that</h4>
      <AuthTabs />
    </>
  )
}
