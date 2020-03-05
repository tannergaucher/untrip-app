import React, { useState } from "react"

import { UPDATE_LIST_MUTATION } from "../apollo/graphql"
import { useMutation } from "@apollo/react-hooks"

export default function EditListTitleForm({ list, setShowEditTitle }) {
  const [editedTitle, setEditedTitle] = useState("")

  const [updateList, { loading, error }] = useMutation(UPDATE_LIST_MUTATION, {
    variables: {
      title: editedTitle,
      listId: list.id,
    },
  })

  return (
    <fieldset className="fieldset" disabled={loading}>
      {error && `${error}`}
      <form
        className="form"
        onSubmit={async e => {
          e.preventDefault()
          await updateList()
          setShowEditTitle(false)
        }}
      >
        <input
          className="input"
          defaultValue={list.title}
          onChange={e => setEditedTitle(e.target.value)}
          required={true}
        />
        <button className="btn" disabled={loading} type="submit">
          Save
        </button>
      </form>
    </fieldset>
  )
}
