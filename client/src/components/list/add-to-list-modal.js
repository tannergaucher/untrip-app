import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import { Layer } from "grommet"
import { AddCircle } from "grommet-icons"
import styled from "styled-components"

import { AuthTabs } from "../auth"
import { UserLists } from "../list"
import { Button } from "../styles"
import { IS_LOGGED_IN } from "../apollo/graphql"

const PlainBtn = styled(Button)`
  border: var(--thickness) solid var(--white);
`

const StyledLayer = styled(Layer)`
  width: 50vw;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 900px) {
    width: 90vw;
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
        <AddCircle color="var(--black)" />
      </PlainBtn>

      {show && (
        <StyledLayer
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
              <AuthTabs />
            )}
          </div>
        </StyledLayer>
      )}
    </>
  )
}
