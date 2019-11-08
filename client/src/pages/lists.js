import React from "react"
import { useQuery } from "@apollo/react-hooks"

import { AuthTabs } from "../components/auth"
import { Link } from "../components/styles"
import { SEO, Loading } from "../components/elements"
import { IS_LOGGED_IN, CURRENT_USER_QUERY } from "../components/apollo/graphql"

export default function ListsPage() {
  const { error, data } = useQuery(IS_LOGGED_IN)

  return (
    <>
      {error && `Error: ${error.message}`}
      {data && data.isLoggedIn ? <UserLists /> : <AuthTabs />}
    </>
  )
}

function UserLists() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  return (
    <>
      <SEO title={`My Untrips | Untrip`} />
      <>
        {loading && <Loading message="Loading lists..." />}
        {error && `Error: ${error.message}`}
        {data && data.me && <h2>My Lists</h2>}
        {data && data.me && data.me.lists.length === 0 && (
          <h4>You don't have any lists yet. Make one!</h4>
        )}
        <>
          {data &&
            data.me &&
            data.me.lists.map(list => {
              if (list.places.length === 0) {
                return <h4>{`Oops, ${list.title}has no places yet`}</h4>
              }
              return (
                <Link to={`/app/list/${list.id}`} key={list.id}>
                  {/* <UserList/> */}
                </Link>
              )
            })}
        </>
      </>
    </>
  )
}
