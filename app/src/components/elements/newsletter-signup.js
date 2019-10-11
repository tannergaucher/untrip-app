import React, { useState } from "react"
import styled from "styled-components"
import { useMutation } from "@apollo/react-hooks"
import { SUBSCRIBE_TO_EMAIL_MUTATION } from "../apollo/graphql"
import { MailOption } from "grommet-icons"

const StyledNewsletter = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: black;
  color: white;
  padding: 2rem;

  h2 {
    text-align: center;
  }
`

export default function NewsletterSignup() {
  return (
    <StyledNewsletter>
      <MailOption color="white" size="large" />
      <h2>Subscribe to the Untrip weekly newsletter</h2>
      <NewsletterForm />
    </StyledNewsletter>
  )
}

const Fieldset = styled.fieldset`
  padding: 0;
  margin: 0;
`

const Form = styled.form`
  display: flex;

  button {
    font-family: var(--sans);
    font-size: var(--font-size);
    border: 1px solid white;
    background: white;
    text-transform: uppercase;
  }

  &:hover {
    button {
      background: black;
      color: white;
    }
  }
`

const Input = styled.input`
  font-size: var(--font-size);
  font-family: var(--sans);
  border: 2px solid white;
  padding: 0.5rem 1rem;
  background: black;
  color: white;

  ::placeholder {
    color: white;
    text-transform: uppercase;
  }
`

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
    // <Fieldset disabled={loading}>
    //   {error && `Error: ${error.message}`}

    <Form
      onSubmit={async e => {
        e.preventDefault()

        const { data } = await subscribeToEmail()
        alert(data.subscribeToEmail.message)
        setEmail("")
      }}
    >
      <Input
        placeholder="Email"
        value={email}
        required={true}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">Subscribe</button>
    </Form>
    // </Fieldset>
  )
}
