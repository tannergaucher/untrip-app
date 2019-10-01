import React from "react"
import { Box, Heading, Form, TextInput, Button } from "grommet"

export default function EmailSignup() {
  return (
    <Box
      pad="medium"
      round="medium"
      margin={{ vertical: "large", horizontal: "medium" }}
      elevation="medium"
    >
      <Heading level="2">Sign up for our weekly newsletter</Heading>
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
          primary
        />
      </Form>
    </Box>
  )
}
