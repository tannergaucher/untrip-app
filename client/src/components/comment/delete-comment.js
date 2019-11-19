import React from "react"
import { useMutation } from "@apollo/react-hooks"

import { Button } from "../styles"
import { DELETE_COMMENT_MUTATION, COMMENTS_QUERY } from "../apollo/graphql"

export default function DeleteComment({ comment, post }) {
  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: {
      commentId: comment.id,
    },
    optimisticResponse: {
      __typename: "Mutation",
      deleteComment: {
        __typename: "Comment",
        id: comment.id,
      },
    },

    update: (cache, payload) => {
      const data = cache.readQuery({
        query: COMMENTS_QUERY,
        variables: {
          sanityPostId: post.id,
        },
      })
      cache.writeQuery({
        query: COMMENTS_QUERY,
        variables: {
          sanityPostId: post.id,
        },
        data: {
          ...data,
          comments: data.comments.filter(
            comment => comment.id !== payload.data.deleteComment.id
          ),
        },
      })
    },
  })

  return (
    <Button
      onClick={async () => {
        await deleteComment()
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
