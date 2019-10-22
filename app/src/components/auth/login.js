import React, { useState } from "react"
import { useMutation, useApolloClient } from "@apollo/react-hooks"
import { navigate } from "gatsby"

import { LOGIN_MUTATION } from "../apollo/graphql"
import { Button, Fieldset, Form, Input } from "../styles"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: { email, password },
  })
  const client = useApolloClient()

  return (
    <Fieldset>
      {error && `${error.message}`}
      <Form
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
          navigate("/")
        }}
      >
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={loading}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={loading}
        />
        <Button type="submit" primary>
          Log In
        </Button>
      </Form>
    </Fieldset>
  )
}
