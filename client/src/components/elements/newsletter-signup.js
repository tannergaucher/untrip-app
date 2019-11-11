import React, { useState } from "react"
import styled from "styled-components"
import { useMutation } from "@apollo/react-hooks"
import { SUBSCRIBE_TO_EMAIL_MUTATION } from "../apollo/graphql"

const StyledNewsletter = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--black);
  color: var(--white);

  @media (max-width: 600px) {
    align-items: flex-start;
    padding: 0rem;

    .mail-text {
      text-align: left;
    }
  }
`

export default function NewsletterSignup() {
  return (
    <StyledNewsletter>
      <h2 className="mail-text">
        Get the latest on what's happening in KL, every week.
      </h2>
      <NewsletterForm />
    </StyledNewsletter>
  )
}

const Form = styled.form`
  display: flex;

  button {
    font-family: var(--sans);
    font-size: var(--font-size);
    border: 1px solid var(--white);
    background: var(--white);
    text-transform: uppercase;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    button {
      margin-top: 1rem;
      width: 100%;
    }
  }
`

const Input = styled.input`
  font-size: var(--font-size);
  font-family: var(--sans);
  border: 2px solid var(--white);
  padding: 0.5rem;
  background: var(--black);
  color: var(--white);
  ::placeholder {
    color: var(--white);
    text-transform: uppercase;
  }
`

function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [subscribeToEmail] = useMutation(SUBSCRIBE_TO_EMAIL_MUTATION, {
    variables: {
      email,
    },
  })

  return (
    <Form
      onSubmit={async e => {
        e.preventDefault()
        const { data } = await subscribeToEmail()
        // TODO: Make a subscribed to email alert Modal.
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
  )
}
