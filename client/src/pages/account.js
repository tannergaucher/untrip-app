import { AuthTabs, LogoutButton } from "../components/auth"
import { CURRENT_USER_QUERY, IS_LOGGED_IN } from "../components/apollo/graphql"

import React from "react"
import { useQuery } from "@apollo/react-hooks"

export default function AccountPage() {
  const { loading, error, data } = useQuery(IS_LOGGED_IN)

  if (loading) return `Loading...`
  if (error) return `Error: ${error.message}`

  return (
    <div className="padding">
      {data && data.isLoggedIn ? <UserProfile /> : <AuthTabs />}
    </div>
  )
}

function UserProfile() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return `Loading...`

  if (error) return <h2>{`Error: ${error.message}`}</h2>

  return (
    data &&
    data.me && (
      <>
        <h1>{data.me.username}</h1>
        <h2>{data.me.email}</h2>
        <br />
        <LogoutButton shouldNavigateTo={`/`} />
      </>
    )
  )
}
