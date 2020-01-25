import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import { Bookmark, Close } from "grommet-icons"

import { AuthTabs } from "../auth"
import { UserLists } from "../list"
import { Button, StyledLayer } from "../styles"
import { IS_LOGGED_IN } from "../apollo/graphql"

export default function AddToListModal({ place }) {
  const [showModal, setShowModal] = useState(false)
  const { error, loading, data } = useQuery(IS_LOGGED_IN)

  if (loading) return `Loading...`
  if (error) return `Error: ${error.message}`

  return (
    <>
      <Button
        onClick={() => setShowModal(!showModal)}
        style={{
          padding: `var(--space-sm) 0`,
          background: `var(--card-bg)`,
          border: `none`,
        }}
      >
        <Bookmark size="var(--text-md)" color="var(--href-color)" />
      </Button>
      {showModal && (
        <StyledLayer
          onEsc={() => setShowModal(false)}
          onClickOutside={() => setShowModal(false)}
        >
          <>
            <Button
              style={{
                alignSelf: `flex-end`,
                padding: `var(--space-sm)`,
                border: `none`,
                background: `var(--bg-1)`,
              }}
              onClick={() => setShowModal(false)}
            >
              <Close size="var(--text-md)" color="var(--text-color)" />
            </Button>
            {data && data.isLoggedIn ? (
              <UserLists place={place.place} setShowModal={setShowModal} />
            ) : (
              <AuthTabs />
            )}
          </>
        </StyledLayer>
      )}
    </>
  )
}
