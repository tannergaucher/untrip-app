import React, { useState } from "react"
import { useMutation, useApolloClient } from "@apollo/react-hooks"
import { TextInput, Button, Text, Form } from "grommet"

import { SIGN_UP_MUTATION } from "../apollo/graphql"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signup, { loading, error }] = useMutation(SIGN_UP_MUTATION, {
    variables: { email, password },
  })
  const client = useApolloClient()

  return (
    <fieldset disabled={loading} style={{ border: `none` }}>
      {error && <Text>Error: {error.message}</Text>}
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
        }}
      >
        <TextInput
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={loading}
        />

        <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={loading}
        />

        <Button type="submit" label="Sign Up" />
      </Form>
    </fieldset>
  )
}
