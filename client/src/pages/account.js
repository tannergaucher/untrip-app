import React from "react"
import { useQuery } from "@apollo/react-hooks"

import { ContentAsideGrid } from "../components/styles"
import { AuthTabs, Logout } from "../components/auth"
import { IS_LOGGED_IN, CURRENT_USER_QUERY } from "../components/apollo/graphql"

export default function AccountPage() {
  const { loading, error, data } = useQuery(IS_LOGGED_IN)

  return (
    <ContentAsideGrid>
      <div className="content">
        {loading && `Loading...`}
        {error && `Error: ${error.message}`}
        {data && data.isLoggedIn ? <UserAccount /> : null}
      </div>
      <aside>{data && !data.isLoggedIn && <AuthTabs />}</aside>
    </ContentAsideGrid>
  )
}

function UserAccount() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  return (
    <>
      {loading && `Loading...`}
      {error && `Error: ${error.message}`}
      {data && data.me && (
        <>
          <h1>{data.me.username}</h1>
          <h4>{data.me.email}</h4>
          <br />
          <Logout />
        </>
      )}
    </>
  )
}
