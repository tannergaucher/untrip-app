import React from "react"
import { Heading, Box } from "grommet"
import { useQuery } from "@apollo/react-hooks"

import { AuthTabs, Logout } from "../components/auth"
import { IS_LOGGED_IN, CURRENT_USER_QUERY } from "../components/apollo/graphql"

export default function AccountPage() {
  const { loading, error, data } = useQuery(IS_LOGGED_IN)

  return (
    <>
      {loading && `Loading...`}
      {error && `Error: ${error.message}`}
      {data && data.isLoggedIn ? <UserAccount /> : <AuthTabs />}
    </>
  )
}

function UserAccount() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  return (
    <Box>
      {loading && `Loading...`}
      {error && `Error: ${error.message}`}
      {data && data.me && (
        <>
          <Heading>{data.me.email}</Heading>
          <Logout />
        </>
      )}
    </Box>
  )
}
