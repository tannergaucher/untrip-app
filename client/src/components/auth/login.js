import React, { useState } from "react"

import { LOGIN_MUTATION } from "../apollo/graphql"
import { navigate } from "gatsby"
import { useMutation } from "@apollo/react-hooks"

export default function Login({ shouldNavigateTo }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [login, { loading, error, client }] = useMutation(LOGIN_MUTATION, {
    variables: {
      email,
      password,
    },
  })

  return (
    <fieldset className="fieldset" disabled={loading}>
      {error && `${error.message}`}
      <form
        className="form"
        onSubmit={async e => {
          e.preventDefault()
          const { data } = await login()
          localStorage.setItem("token", data.login.token)
          client.writeData({
            data: {
              isLoggedIn: true,
              me: data.login.user,
            },
          })

          if (shouldNavigateTo) {
            navigate(shouldNavigateTo)
          }
        }}
      >
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required={true}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required={true}
        />
        <button className="btn btn-primary" type="submit" loading={loading}>
          Log In
        </button>
      </form>
    </fieldset>
  )
}
