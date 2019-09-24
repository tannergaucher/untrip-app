import React, { useState } from "react"
import { Text } from "rebass"
import { useMutation, useApolloClient } from "@apollo/react-hooks"

import { TextInput, Button } from "../styles"

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
      {error && <Text color="var(--warning)">Error: {error.message}</Text>}

      <form
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
        <label htmlFor="email">
          <TextInput
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            mt={[2]}
            disabled={loading}
          />
        </label>
        <label htmlFor="password">
          <TextInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            mt={[2]}
            disabled={loading}
          />
        </label>
        <Button type="submit" mt={[2]} disabled={loading} width={[1]}>
          Sign up
        </Button>
      </form>
    </fieldset>
  )
}
