import React from "react"
import { Link } from "gatsby"
import { Box, Heading } from "grommet"
import { useQuery } from "@apollo/react-hooks"

import { AuthTabs } from "../components/auth"
import { HeroCard } from "../components/styles"
import { SEO, Loading } from "../components/elements"
import { IS_LOGGED_IN, CURRENT_USER_QUERY } from "../components/apollo/graphql"

export default function ListsPage() {
  const { loading, error, data } = useQuery(IS_LOGGED_IN)

  return (
    <>
      {error && `Error: ${error.message}`}
      {data && data.isLoggedIn ? (
        <UserLists />
      ) : (
        <AuthTabs message="Log in to view your untrips" fullHeight />
      )}
    </>
  )
}

function Message({ message }) {
  return (
    <Box>
      <Heading>{message}</Heading>
    </Box>
  )
}

function UserLists() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  return (
    <>
      <SEO title={`My Untrips | Untrip`} />
      <Box>
        {loading && <Loading message="Loading lists..." />}
        {error && `Error: ${error.message}`}
        {/* handle case of user not having any lists  */}
        {data && data.me && data.me.lists.length === 0 && (
          <Message message="You don't have any lists yet." />
        )}

        {data &&
          data.me &&
          data.me.lists.map(list => {
            //Handle case of list not having any places. Display this list has no places message and default to generic background img
            if (list.places.length === 0) {
              return (
                <Message message={`Oops, ${list.title} has no places yet.`} />
              )
            }

            // Finally, render list places
            return (
              <Link to={`/app/lists/list/${list.id}`} key={list.id}>
                {/* TODO: ADD edit and delete list icons on hover to hero card */}
                <HeroCard
                  key={list.id}
                  text={list.title}
                  fluid={JSON.parse(list.places[0].placeImageUrl)}
                />
              </Link>
            )
          })}
      </Box>
    </>
  )
}
