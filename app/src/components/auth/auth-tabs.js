import React from "react"
import { Box, Tabs, Tab, Heading } from "grommet"

import { Login, Signup } from "../auth"

export default function AuthTabs({ message }) {
  return (
    <Box>
      {message && (
        <Heading mb={[4]} textAlign="center">
          {message}
        </Heading>
      )}
      <Tabs>
        <Tab title="Log In">
          <Login />
        </Tab>
        <Tab title="Sign Up">
          <Signup />
        </Tab>
      </Tabs>
    </Box>
  )
}
