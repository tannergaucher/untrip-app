import { LIST_QUERY } from "../apollo/graphql"
import { Map } from "../elements"
import React from "react"
import { useQuery } from "@apollo/react-hooks"

export default function UserListPage({ listId }) {
  const { data, loading, error } = useQuery(LIST_QUERY, {
    variables: {
      listId,
    },
  })

  if (loading) return <h1 className="title padding">Loading list...</h1>

  if (error) return <h2>Error...</h2>

  return (
    <div>
      {data && data.list && (
        <>
          <h1 className="title padding">{data.list.title}</h1>
          <Map isUserList={true} places={data.list.places} />
        </>
      )}
    </div>
  )
}
