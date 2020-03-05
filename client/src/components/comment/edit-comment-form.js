import React, { useState } from "react"

import { EDIT_COMMENT_MUTATION } from "../apollo/graphql"
import { useMutation } from "@apollo/react-hooks"

export default function EditCommentForm({ comment, setShowEditForm }) {
  const [editedText, setEditedText] = useState(false)
  const [editComment] = useMutation(EDIT_COMMENT_MUTATION, {
    variables: {
      commentId: comment.id,
      text: editedText,
    },
    optimisticResponse: {
      __typename: "Mutation",
      editComment: {
        __typename: "Comment",
        id: comment.id,
        createdAt: comment.createdAt,
        updatedAt: comment.updatedAt,
        text: editedText,
        author: comment.author,
        sanityPostId: comment.sanityPostId,
        claps: comment.claps,
      },
    },
  })

  return (
    <fieldset
      className="fieldset"
      onSubmit={e => {
        e.preventDefault()
        editComment()
        setShowEditForm(false)
      }}
    >
      <form className="form">
        <textarea
          className="textarea"
          required={true}
          defaultValue={comment.text}
          onChange={e => setEditedText(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </form>
    </fieldset>
  )
}
