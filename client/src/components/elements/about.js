import React, { useState } from "react"
import styled from "styled-components"
import { useMutation } from "@apollo/react-hooks"

import { Share } from "../elements"
import { SUBSCRIBE_TO_EMAIL_MUTATION } from "../apollo/graphql"
import { Button, Form, Input, StyledLayer } from "../styles"

export default function About() {
  return (
    <div className="sticky">
      <h3 className="side-title">About Untrip</h3>
      <p className="site-description">
        We curate the best food and drink, music, culture and events happening
        in Kuala Lumpur.
      </p>
      <br />
      <Share />
      <EmailForm />
      <br />
    </div>
  )
}

function EmailForm() {
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")

  const [subscribeToEmail, { loading, error }] = useMutation(
    SUBSCRIBE_TO_EMAIL_MUTATION,
    {
      variables: {
        email,
      },
    }
  )

  return (
    <>
      {error && `${error.message}`}
      <Form
        onSubmit={async e => {
          e.preventDefault()
          const { data } = await subscribeToEmail()
          setEmail("")
          setMessage(data.subscribeToEmail.message)
        }}
      >
        <Input
          placeholder="Email Address"
          type="email"
          value={email}
          required={true}
          onChange={e => setEmail(e.target.value)}
        />

        <Button type="submit" primary loading={loading}>
          Subscribe to weekly newsletter
        </Button>
      </Form>
      {message && (
        <StyledLayer
          onEsc={() => setMessage("")}
          onClickOutside={() => setMessage("")}
        >
          <div className="email-subscribe-modal">
            <div>
              <h1 className="">🎉</h1>
              <h2 className="">{message}</h2>
            </div>
            <Button
              primary
              style={{ marginTop: `3rem` }}
              // Closes modal.
              onClick={() => setMessage("")}
            >
              Close
            </Button>
            <div className="">
              <h5>Change your mind already?</h5>
              <Button>Unsubscribe</Button>
            </div>
          </div>
        </StyledLayer>
      )}
    </>
  )
}
