import React from "react"
import { Box, Heading, Form, TextInput, Button } from "grommet"

export default function EmailSignup() {
  return (
    <Box
      pad="medium"
      round="medium"
      margin={{ vertical: "large", horizontal: "medium" }}
      elevation="medium"
      background="black"
    >
      <Heading level="2" color="white">
        Subscribe to the Untrip newsletter.
      </Heading>
      <Heading level="3" color="white">
        Never miss out on what's happening now KL.
      </Heading>
      <Form>
        <TextInput placeholder="Email" />
        <Button
          label={
            <Heading margin="none" color="white" level="3">
              Submit
            </Heading>
          }
          margin={{ vertical: "small" }}
          fill
        />
      </Form>
    </Box>
  )
}
