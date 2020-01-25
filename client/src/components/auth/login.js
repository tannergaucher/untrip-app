import React, { useState } from "react"
import { navigate } from "gatsby"
import { useMutation } from "@apollo/react-hooks"

import { LOGIN_MUTATION } from "../apollo/graphql"
import { Button, Fieldset, Form, Input } from "../styles"

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
    <>
      <h2 style={{ marginTop: `0`, textAlign: `center` }}>Log In</h2>
      <Fieldset disabled={loading}>
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

            if (shouldNavigateTo) {
              navigate(shouldNavigateTo)
            }
          }}
        >
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required={true}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required="true"
          />
          <Button type="submit" primary loading={loading}>
            Log In
          </Button>
        </Form>
      </Fieldset>
    </>
  )
}
