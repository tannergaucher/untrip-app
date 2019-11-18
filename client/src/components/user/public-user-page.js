import React from "react"
import { useQuery } from "@apollo/react-hooks"

import { ContentAsideGrid } from "../styles"
import { USER_QUERY } from "../apollo/graphql"

export default function PublicUserPage(props) {
  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: {
      userId: props.userId,
    },
  })

  console.log(data)

  return (
    <>
      <ContentAsideGrid>
        <div className="content">
          {/*  */}
          cpontent
        </div>
        <aside>
          aside
          {/*  */}
        </aside>
      </ContentAsideGrid>
    </>
  )
}
