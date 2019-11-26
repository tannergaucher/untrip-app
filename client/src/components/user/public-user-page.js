import React from "react"
import { useQuery } from "@apollo/react-hooks"

import { ContentAsideGrid } from "../styles"
import { USER_QUERY } from "../apollo/graphql"

export default function PublicUserPage({ userId }) {
  // const { data } = useQuery(USER_QUERY, {
  //   variables: {
  //     userId,
  //   },
  // })

  // TODO

  return (
    <>
      <ContentAsideGrid>
        <article className="content">Content</article>
        <aside>aside</aside>
      </ContentAsideGrid>
    </>
  )
}
