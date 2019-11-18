import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"

import { Fieldset, Form, Textarea, Button } from "../styles"
import {
  ADD_COMMENT_MUTATION,
  COMMENTS_QUERY,
  CURRENT_USER_QUERY,
} from "../apollo/graphql"

export default function AddComment({ post }) {
  const [text, setText] = useState("")

  const { data } = useQuery(CURRENT_USER_QUERY)
  const [addComment, { error }] = useMutation(ADD_COMMENT_MUTATION, {
    variables: {
      commentInput: {
        text,
        sanityPostId: post.id,
      },
    },

    optimisticResponse: {
      __typename: "Mutation",
      addComment: {
        __typename: "Comment",
        id: new Date(),
        sanityPostId: post.id,
        text,
        createdAt: new Date(),
        updatedAt: new Date(),
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
          comments: [payload.data.addComment, ...data.comments],
        },
      })
    },
  })

  return (
    <Fieldset
      onSubmit={async e => {
        e.preventDefault()
        setText("")
        await addComment()
      }}
    >
      {error && `Error!`}

      <Form>
        <Textarea
          value={text}
          onChange={e => setText(e.target.value)}
          required={true}
        ></Textarea>
        <Button primary fillMobile type="submit">
          Add Comment
        </Button>
      </Form>
    </Fieldset>
  )
}