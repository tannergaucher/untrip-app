import React from "react"
import { Heading, Box } from "grommet"
import { useQuery } from "@apollo/react-hooks"

import { AuthTabs, Logout } from "../components/auth"
import { IS_LOGGED_IN, CURRENT_USER_QUERY } from "../components/apollo/graphql"

export default function AccountPage() {
  const { loading, error, data } = useQuery(IS_LOGGED_IN)

  return (
    <Box fill={true} style={{ flex: "1" }}>
      {loading && `Loading...`}
      {error && `Error: ${error.message}`}
      {data && data.isLoggedIn ? (
        <UserAccount />
      ) : (
        <Box justify="center" justify="center" style={{ flex: "1" }}>
          <AuthTabs />
        </Box>
      )}
    </Box>
  )
}

function UserAccount() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  return (
    <>
      {loading && `Loading...`}
      {error && `Error: ${error.message}`}
      {data && data.me && (
        <Box margin={{ vertical: "large", horizontal: "medium" }}>
          <Heading color="black" level="4">
            {data.me.email}
          </Heading>
          <Logout />
        </Box>
      )}
    </>
  )
}
