import React, { useState } from "react"
import { navigate } from "gatsby"
import { useMutation } from "@apollo/react-hooks"

import { SIGN_UP_MUTATION } from "../apollo/graphql"
import { Button, Fieldset, Form, Input } from "../styles"

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

            if (shouldNavigateTo) {
              navigate(shouldNavigateTo)
            }
          }}
        >
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit" primary loading={loading}>
            Sign Up
          </Button>
        </Form>
      </Fieldset>
    </>
  )
}
