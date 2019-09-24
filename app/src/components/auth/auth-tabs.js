import React from "react"
import { Tabs, Tab } from "grommet"
import { Flex, Heading } from "rebass"

import { Login, Signup } from "../auth"

export default function AuthTabs({ message, fullHeight }) {
  return (
    <Flex
      width={[1]}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{ height: fullHeight ? `calc(100vh - 50px)` : "" }}
      p={[3]}
    >
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
    </Flex>
  )
}
