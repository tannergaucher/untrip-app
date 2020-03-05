import { CURRENT_USER_QUERY, DELETE_LIST_MUTATION } from "../apollo/graphql"

import React from "react"
import { useMutation } from "@apollo/react-hooks"

export default function DeleteListButton({ listId }) {
  const [deleteList, { loading }] = useMutation(DELETE_LIST_MUTATION, {
    variables: {
      listId,
    },
    optimisticResponse: {
      __typename: "Mutation",
      deleteList: {
        __typename: "List",
        id: listId,
      },
    },
    update: cache => {
      const data = cache.readQuery({ query: CURRENT_USER_QUERY })
      const updatedLists = data.me.lists.filter(list => list.id !== listId)
      cache.writeQuery({
        query: CURRENT_USER_QUERY,
        data: {
          ...data,
          me: {
            ...data.me,
            lists: updatedLists,
          },
        },
      })
    },
  })

  return (
    <button className="btn" disabled={loading} onClick={() => deleteList()}>
      Delete List
    </button>
  )
}
