import React from "react"
import { useQuery } from "@apollo/react-hooks"

import { LIST_QUERY } from "../apollo/graphql"
import { SEO, Map, Loading } from "../elements"

export default function ListPage({ listId }) {
  const { loading, error, data } = useQuery(LIST_QUERY, {
    variables: { listId },
  })

  return (
    <>
      {loading && <Loading message="Loading list..." />}
      {error && `Error: ${error.message}`}
      {data && data.list && (
        <>
          <SEO title={`${data.list.title} | Untrip`} />
          <Map
            lat={3.139}
            lng={101.6869}
            zoom={11}
            places={data.list.places}
            name={data.list.title}
          />
        </>
      )}
    </>
  )
}
