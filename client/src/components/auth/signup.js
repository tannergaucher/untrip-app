import React, { useState } from "react"
import { navigate } from "gatsby"
import { useMutation, useApolloClient } from "@apollo/react-hooks"

import { SIGN_UP_MUTATION } from "../apollo/graphql"
import { Button, Fieldset, Form, Input } from "../styles"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signup, { loading, error }] = useMutation(SIGN_UP_MUTATION, {
    variables: { email, password },
  })
  const client = useApolloClient()

  return (
    <>
      <h2 style={{ textAlign: `center` }}>Sign Up</h2>
      <Fieldset disabled={loading}>
        {error && `${error.message}`}
        <Form
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
            navigate(`/`)
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
            Sign Up
          </Button>
        </Form>
      </Fieldset>
    </>
  )
}
