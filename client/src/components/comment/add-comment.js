import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"

import { Fieldset, Form, Textarea, Button } from "../styles"
import { ADD_COMMENT_MUTATION } from "../apollo/graphql"

export default function AddComment({ post }) {
  const [text, setText] = useState("")

  const [addComment, { error }] = useMutation(ADD_COMMENT_MUTATION, {
    variables: {
      commentInput: {
        text,
        sanityPostId: post.id,
      },
    },
  })

  return (
    <Fieldset
      onSubmit={async e => {
        e.preventDefault()
        const res = await addComment()
        console.log(res)
        setText("")
      }}
    >
      {error && `Error!`}

      <Form>
        <Textarea
          value={text}
          onChange={e => setText(e.target.value)}
        ></Textarea>
        <Button primary fillMobile type="submit">
          Add Comment
        </Button>
      </Form>
    </Fieldset>
  )
}
