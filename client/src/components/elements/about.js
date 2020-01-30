import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import { Close } from "grommet-icons"

import { Share } from "../elements"
import { SUBSCRIBE_TO_EMAIL_MUTATION } from "../apollo/graphql"
import { Button, Form, Input, StyledLayer } from "../styles"

export default function About() {
  return (
    <div className="sticky">
      <h3 className="side-title">About Us</h3>
      <p className="site-description">
        We curate the best food and drink, music, culture and events happening
        in Kuala Lumpur.
      </p>
      <br />
      <Share href={"/"} />
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
          type="email"
          value={email}
          required={true}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <Button
          primary
          type="submit"
          loading={loading ? "true" : "false"} // Because console warning message
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          Subscribe
        </Button>
      </Form>
      {message && (
        <StyledLayer
          onEsc={() => setMessage("")}
          onClickOutside={() => setMessage("")}
        >
          <div className="email-subscribe-modal">
            <div>
              <div
                className="emoji-close-btn"
                style={{
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `space-between`,
                }}
              >
                <h1 style={{ margin: `0` }}>
                  <span role="img" aria-label="welcome emoji">
                    🎉
                  </span>
                </h1>
                <Button
                  onClick={() => setMessage("")}
                  style={{ border: `none` }}
                >
                  <Close size="var(--text-md)" color="var(--text-color)" />
                </Button>
              </div>
              <h2 className="email-message">{message}</h2>
            </div>
            <div>
              <h5>Change your mind already?</h5>
              <Button>Unsubscribe</Button>
            </div>
          </div>
        </StyledLayer>
      )}
    </>
  )
}
