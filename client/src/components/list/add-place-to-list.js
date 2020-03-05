import { CURRENT_USER_QUERY, IS_IN_LIST } from "../apollo/graphql"
import { CreateListPlaceButton, DeleteListPlaceButton } from "."
import React, { useState } from "react"

import { CreateListForm } from "."
import { useQuery } from "@apollo/react-hooks"

export default function AddPlaceToList({ place, setShowModal }) {
  const [showForm, setShowForm] = useState(false)
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return `Loading...`

  if (error) return `Error: ${error.message}`

  if (data && data.me && data.me.lists.length === 0) {
    return (
      <>
        {/* override grommet styles*/}
        <h2 style={{ color: `var(--text-color)`, margin: `var(--space-md) 0` }}>
          Create a new list with {`${place.name}`}
        </h2>
        <CreateListForm place={place} />
      </>
    )
  }

  return (
    <>
      {/* Override grommet layer styles.  */}
      <h2
        className="card-heading"
        style={{
          color: `var(--text-color)`,
          fontSize: `var(--text-xl)`,
          margin: `var(--space-md)  0`,
        }}
      >
        Add {place.name} to list
      </h2>
      <br />
      {data &&
        data.me &&
        data.me.lists.map(list => (
          <ToggleListPlaceButtons list={list} place={place} key={list.id} />
        ))}
      {showForm ? (
        <>
          <hr />
          <CreateListForm place={place} setShowModal={setShowModal} />
        </>
      ) : (
        <>
          <hr style={{ marginTop: `var(--space-md)` }} />
          <button className="btn" onClick={() => setShowForm(!showForm)}>
            New List
          </button>
        </>
      )}
    </>
  )
}

function ToggleListPlaceButtons({ list, place }) {
  const { data } = useQuery(IS_IN_LIST, {
    variables: { listId: list.id, placeSanityId: place.id },
  })

  return data && data.isInList ? (
    <DeleteListPlaceButton list={list} place={place} text={list.title} />
  ) : (
    <CreateListPlaceButton list={list} place={place} />
  )
}
