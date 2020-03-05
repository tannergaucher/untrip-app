import { COMMENTS_QUERY, DELETE_COMMENT_MUTATION } from "../apollo/graphql"

import React from "react"
import { useMutation } from "@apollo/react-hooks"

export default function DeleteCommentButton({ comment, post }) {
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
    <button
      style={{ borderColor: `var(--grey)`, color: `var(--grey)` }}
      className="btn"
      onClick={() => {
        deleteComment()
      }}
    >
      Delete Comment
    </button>
  )
}
