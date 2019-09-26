import React, { useState } from "react"
import { Button, TextInput, Form, Text, Box } from "grommet"

import { LOGIN_MUTATION } from "../apollo/graphql"
import { useMutation, useApolloClient } from "@apollo/react-hooks"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: { email, password },
  })
  const client = useApolloClient()

  return (
    <fieldset disabled={loading} style={{ border: `none` }}>
      {error && <Text>{error.message}</Text>}
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
        }}
      >
        <Box margin={{ vertical: "medium" }}>
          <TextInput
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
        </Box>
        <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={loading}
        />
        <Button
          type="submit"
          label="Log In"
          fill={true}
          margin={{ top: "medium" }}
        />
      </Form>
    </fieldset>
  )
}
