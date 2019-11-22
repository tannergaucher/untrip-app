import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import { Bookmark, Close } from "grommet-icons"
import styled from "styled-components"

import { AuthTabs } from "../auth"
import { UserLists } from "../list"
import { Button, StyledLayer } from "../styles"
import { IS_LOGGED_IN } from "../apollo/graphql"

export default function AddToListModal({ place }) {
  const [show, setShow] = useState(false)
  const { error, loading, data } = useQuery(IS_LOGGED_IN)

  if (loading) return `Loading...`
  if (error) return `Error: ${error.message}`

  return (
    <>
      <Button
        onClick={() => setShow(!show)}
        style={{
          padding: `var(--space-sm)`,
          border: `none`,
        }}
      >
        <Bookmark size="var(--text-md)" color="var(--black)" />
      </Button>
      {show && (
        <StyledLayer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <>
            <Button
              style={{
                alignSelf: `flex-end`,
                padding: `var(--space-sm)`,
                border: `none`,
              }}
              onClick={() => setShow(false)}
            >
              <Close size="var(--text-md)" color="var(--black)" />
            </Button>
            {data && data.isLoggedIn ? (
              <UserLists place={place.place} />
            ) : (
              <AuthTabs />
            )}
          </>
        </StyledLayer>
      )}
    </>
  )
}
