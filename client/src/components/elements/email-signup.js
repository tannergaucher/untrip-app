import React, { useState } from "react"

import { Layer } from "grommet"
import { SUBSCRIBE_TO_EMAIL_MUTATION } from "../apollo/graphql"
import { useMutation } from "@apollo/react-hooks"

export default function EmailSignup() {
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
    <fieldset className="fieldset" disabled={loading}>
      {error && `${error.message}`}
      <form
        className="form"
        onSubmit={async e => {
          e.preventDefault()
          const { data } = await subscribeToEmail()
          setEmail("")
          setMessage(data.subscribeToEmail.message)
        }}
      >
        <input
          className="input"
          type="email"
          value={email}
          required={true}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <button className="btn btn-primary">Subscribe</button>
      </form>
      {message && (
        <Layer
          onEsc={() => setMessage("")}
          onClickOutside={() => setMessage("")}
        >
          <MessageModal />
        </Layer>
      )}
    </fieldset>
  )
}

const MessageModal = ({ message, setMessage }) => {
  return (
    <div>
      <div>
        <div
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
          <button
            className="btn"
            onClick={() => setMessage("")}
            style={{ border: `none` }}
          >
            X
          </button>
        </div>
        <h2>{message}</h2>
      </div>
      <h4>Change your mind already?</h4>
      <button>Unsubscribe</button>
    </div>
  )
}
