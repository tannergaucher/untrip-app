import React from "react"

import { Box, Heading, Form, TextInput, Button, CheckBox } from "grommet"

export default function SignupBanner() {
  return (
    <Box
      background="white"
      round="medium"
      elevation="xlarge"
      margin={{ vertical: "large", horizontal: "medium" }}
      pad="medium"
    >
      <Heading level="2" color="black">
        Sign up for an account.
      </Heading>
      <Heading level="3" color="black">
        Get exclusive content and information curated exactly to your needs.
      </Heading>
      <CheckBox
        checked={true}
        label="I want to subscribe to the Untrip weekly newsletter."
      />
      <Box margin={{ top: "medium" }}>
        <Form>
          <TextInput placeholder="Email" />
          <Button
            margin={{ top: "small" }}
            fill
            primary
            label={
              <Heading level="4" margin="none" color="white">
                Sign Up
              </Heading>
            }
          />
        </Form>
      </Box>
    </Box>
  )
}
