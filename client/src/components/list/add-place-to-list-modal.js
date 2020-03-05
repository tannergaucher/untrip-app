import React, { useState } from "react"

import { AddPlaceToList } from "."
import { AuthTabs } from "../auth"
import { IS_LOGGED_IN } from "../apollo/graphql"
import { Layer } from "grommet"
import { useQuery } from "@apollo/react-hooks"

export default function AddPlaceToListModal({ place }) {
  const [showModal, setShowModal] = useState(false)
  const { error, loading, data } = useQuery(IS_LOGGED_IN)

  if (loading) return `Loading...`

  if (error) return `Error: ${error.message}`

  return (
    <>
      <button
        className="btn btn-primary"
        style={{ width: `100%` }}
        onClick={() => setShowModal(!showModal)}
      >
        Add
      </button>
      {showModal && (
        <Layer
          onEsc={() => setShowModal(false)}
          onClickOutside={() => setShowModal(false)}
          style={{
            backgroundColor: `var(--bg-1)`,
            height: `100vh`,
            width: `100vw`,
            padding: `var(--space-sm)`,
            borderRadius: 0,
            overflowY: `scroll`,
          }}
        >
          <button
            className="btn"
            onClick={() => setShowModal(false)}
            style={{
              alignSelf: `flex-end`,
              marginRight: 0,
              borderColor: `var(--bg-1)`,
            }}
          >
            X
          </button>
          <div className="padding container center">
            {data && data.isLoggedIn ? (
              <AddPlaceToList place={place.place} setShowModal={setShowModal} />
            ) : (
              <AuthTabs />
            )}
          </div>
        </Layer>
      )}
    </>
  )
}
