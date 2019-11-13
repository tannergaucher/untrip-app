import React, { useState } from "react"
import styled from "styled-components"
import { useMutation } from "@apollo/react-hooks"

import { Share } from "../elements"
import { Divider, Button, Form, Input, StyledLayer } from "../styles"
import { SUBSCRIBE_TO_EMAIL_MUTATION } from "../apollo/graphql"

const Styled = styled.div`
  .site-description {
    margin-bottom: 1.5rem;
  }
`

export default function About() {
  return (
    <Styled className={`sticky`}>
      <h2 className="side-title">About Untrip</h2>
      <p className="site-description">
        We curate the best food and drink, music, culture and events happening
        in Kuala Lumpur.
      </p>
      <Share />
      <EmailForm />
      <Divider />
    </Styled>
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
        <Button type="submit" primary loading={loading.toString()}>
          Subscribe to weekly newsletter
        </Button>
      </Form>
      {message && (
        <StyledLayer
          onEsc={() => setMessage("")}
          onClickOutside={() => setMessage("")}
        >
          <div className="email-subscribe-modal">
            <h1 className="center">🎉</h1>
            <h2 className="center">{message}</h2>
            <div className="end">
              <h5>Change your mind already?</h5>
              <Button>Unsubscribe</Button>
            </div>
          </div>
        </StyledLayer>
      )}
    </>
  )
}
