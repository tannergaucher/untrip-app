import {
  COMMENTS_QUERY,
  CREATE_COMMENT_MUTATION,
  CURRENT_USER_QUERY,
} from "../apollo/graphql"
import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"

export default function CreateComment({ post }) {
  const [text, setText] = useState("")

  const { data } = useQuery(CURRENT_USER_QUERY)

  const tempDate = new Date() // Because need to compare comment createdAt versus updatedAt.

  const [createComment, { error }] = useMutation(CREATE_COMMENT_MUTATION, {
    variables: {
      commentInput: {
        text,
        sanityPostId: post.id,
      },
    },
    optimisticResponse: {
      __typename: "Mutation",
      createComment: {
        __typename: "Comment",
        id: tempDate,
        sanityPostId: post.id,
        text,
        createdAt: tempDate,
        updatedAt: tempDate,
        claps: 0,
        author: {
          __typename: "User",
          id: data.me.id ? data.me.id : "",
          username: data.me.username ? data.me.username : "",
        },
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
          comments: [payload.data.createComment, ...data.comments],
        },
      })
    },
  })

  return (
    <fieldset
      style={{ marginTop: `var(--space-md)` }}
      className="fieldset"
      onSubmit={async e => {
        e.preventDefault()
        setText("")
        await createComment()
      }}
    >
      {error && `Error!`}
      <form className="form">
        <textarea
          className="textarea"
          placeholder="Comment"
          rows="5"
          value={text}
          onChange={e => setText(e.target.value)}
          required={true}
        ></textarea>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </fieldset>
  )
}
