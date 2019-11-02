import React from "react"
import { Link } from "gatsby"
import { useQuery } from "@apollo/react-hooks"

import { AuthTabs } from "../components/auth"
import { StyledCardGrid, StyledPage } from "../components/styles"
import { SEO, Loading, Card } from "../components/elements"
import { IS_LOGGED_IN, CURRENT_USER_QUERY } from "../components/apollo/graphql"

export default function ListsPage() {
  const { error, data } = useQuery(IS_LOGGED_IN)

  return (
    <StyledPage>
      {error && `Error: ${error.message}`}
      {data && data.isLoggedIn ? <UserLists /> : <AuthTabs />}
    </StyledPage>
  )
}

function UserLists() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  return (
    <>
      <SEO title={`My Untrips | Untrip`} />
      <StyledCardGrid>
        {loading && <Loading message="Loading lists..." />}
        {error && `Error: ${error.message}`}
        {data && data.me && data.me.lists.length === 0 && (
          <h4>You don't have any lists yet</h4>
        )}
        {data && data.me && <h2>My Lists</h2>}

        <div className="card-grid">
          {data &&
            data.me &&
            data.me.lists.map(list => {
              if (list.places.length === 0) {
                return <h4>{`Oops, ${list.title}has no places yet`}</h4>
              }

              return (
                console.log(JSON.parse(list.places[0].placeImageUrl)) || (
                  <Link to={`/app/lists/list/${list.id}`} key={list.id}>
                    <Card
                      key={list.id}
                      title={list.title}
                      subtitle={`${list.places.length} Plac${
                        list.places.length === 1 ? `e` : `es`
                      }`}
                      fluid={JSON.parse(list.places[0].placeImageUrl)}
                    />
                  </Link>
                )
              )
            })}
        </div>
      </StyledCardGrid>
    </>
  )
}
