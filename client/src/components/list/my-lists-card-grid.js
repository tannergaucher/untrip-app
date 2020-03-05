import { CURRENT_USER_QUERY } from "../apollo/graphql"
import { MyListCard } from "."
import React from "react"
import { useQuery } from "@apollo/react-hooks"

export default function MyListsCardGrid() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <h2>Loading Lists...</h2>

  if (error) return <h2>Error: {error.message}</h2>

  if (data && data.me && data.me.lists.length === 0)
    return <h1>You don't have any lists yet. Make one!</h1>

  return (
    <div className="content-grid">
      {data &&
        data.me &&
        data.me.lists.map(list => {
          return <MyListCard list={list} key={list.id} />
        })}
    </div>
  )
}
