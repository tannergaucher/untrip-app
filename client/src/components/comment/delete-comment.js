import React from "react"
import { useMutation } from "@apollo/react-hooks"

import { Button } from "../styles"
import { DELETE_COMMENT_MUTATION } from "../apollo/graphql"

export default function DeleteComment({ comment }) {
  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: {
      commentId: comment.id,
    },
  })

  return (
    <Button
      onClick={async () => {
        const res = await deleteComment()
        console.log(res)
      }}
      style={{
        color: `var(--grey)`,
        border: `none`,
      }}
    >
      Delete
    </Button>
  )
}
