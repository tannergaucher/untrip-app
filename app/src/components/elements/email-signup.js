import React, { useState } from "react"
import { Box, Heading, Form, TextInput, Button } from "grommet"
import { useMutation } from "@apollo/react-hooks"
import { SUBSCRIBE_TO_EMAIL_MUTATION } from "../apollo/graphql"

export default function EmailSignup() {
  return (
    <Box
      pad="medium"
      round="medium"
      margin={{ vertical: "large", horizontal: "medium" }}
      background="black"
      elevation="medium"
    >
      <Heading level="2" color="white">
        Sign up for our weekly newsletter
      </Heading>
      <NewsletterForm />
    </Box>
  )
}

function NewsletterForm() {
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
    <Form
      onSubmit={async () => {
        const { data } = await subscribeToEmail()
        alert(data.subscribeToEmail.message)
        setEmail("")
      }}
    >
      <TextInput
        placeholder="Email"
        value={email}
        required={true}
        onChange={e => setEmail(e.target.value)}
      />
      <Button
        label={
          <Heading margin="none" color="white" level="3">
            Submit
          </Heading>
        }
        margin={{ vertical: "small" }}
        fill
        type="submit"
        disabled={loading}
      />
    </Form>
  )
}
