import { AuthTabs } from "../components/auth"
import { IS_LOGGED_IN } from "../components/apollo/graphql"
import { MyListsCardGrid } from "../components/list"
import React from "react"
import { SEO } from "../components/elements"
import { useQuery } from "@apollo/react-hooks"

export default function MyListsPage() {
  const { data } = useQuery(IS_LOGGED_IN)

  return (
    <div className="page padding">
      <SEO title={`My Lists`} />
      {data && data.isLoggedIn ? <MyListsCardGrid /> : <AuthTabs />}
      <br />
    </div>
  )
}
