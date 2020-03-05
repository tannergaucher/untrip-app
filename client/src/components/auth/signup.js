import React, { useState } from "react"

import { SIGN_UP_MUTATION } from "../apollo/graphql"
import { navigate } from "gatsby"
import { useMutation } from "@apollo/react-hooks"

export default function Signup({ shouldNavigateTo }) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signup, { loading, error, client }] = useMutation(SIGN_UP_MUTATION, {
    variables: {
      authInput: {
        username,
        email,
        password,
      },
    },
  })

  return (
    <fieldset className="fieldset" disabled={loading}>
      {error && `${error.message}`}
      <form
        className="form"
        onSubmit={async e => {
          e.preventDefault()
          const { data } = await signup()
          localStorage.setItem("token", data.signup.token)
          client.writeData({
            data: {
              isLoggedIn: true,
              me: data.signup.user,
            },
          })

          if (shouldNavigateTo) {
            navigate(shouldNavigateTo)
          }
        }}
      >
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="submit"
          primary
          loading={loading}
        >
          Sign Up
        </button>
      </form>
    </fieldset>
  )
}
