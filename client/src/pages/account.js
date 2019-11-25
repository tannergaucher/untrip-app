import React from "react"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"

import { ContentAsideGrid } from "../components/styles"
import { AuthTabs, Logout } from "../components/auth"
import { IS_LOGGED_IN, CURRENT_USER_QUERY } from "../components/apollo/graphql"

export default function AccountPage() {
  const { loading, error, data } = useQuery(IS_LOGGED_IN)

  if (loading) return `Loading...`
  if (error) return `Error: ${error.message}`

  return (
    <ContentAsideGrid>
      <div className="content">
        {data && data.isLoggedIn ? <UserAccount /> : null}
      </div>
      <aside>{data && !data.isLoggedIn && <AuthTabs />}</aside>
    </ContentAsideGrid>
  )
}

const StyledAccount = styled.div`
  @media (max-width: 1024px) {
    /* Because I live in the aside. I need padding after the breakpoint. */
    padding: var(--space-sm);
  }
`

function UserAccount() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return `Loading...`
  if (error) return `Error: ${error.message}`

  return (
    <StyledAccount>
      {data && data.me && (
        <>
          <h1>{data.me.username}</h1>
          <h4>{data.me.email}</h4>
          <br />
          <Logout shouldNavigateTo={`/`} />
        </>
      )}
    </StyledAccount>
  )
}
