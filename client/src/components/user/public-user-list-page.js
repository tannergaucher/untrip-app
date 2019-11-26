import React from "react"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"

import { Map, Share } from "../elements"
import { LIST_QUERY } from "../apollo/graphql"

const StyledListPage = styled.div`
  margin: 0 var(--space-sm);
`

export default function UserListPage({ listId }) {
  const { data, loading } = useQuery(LIST_QUERY, {
    variables: {
      listId,
    },
  })

  return (
    <StyledListPage>
      {loading && <h4>Loading</h4>}
      {data && data.list && (
        <>
          <h1 className="list-title">{data.list.title}</h1>
          <Share href={`/app/list/${data.list.id}`} />
          <div
            className="full-size-map"
            style={{ height: `100vh`, marginBottom: `var(--space-md)` }}
          >
            <Map
              isUserList={true}
              places={data.list.places}
              style={{
                maxWidth: `calc(100% - var(--space-md))`,
                height: `100vh`,
              }}
            />
          </div>
        </>
      )}
    </StyledListPage>
  )
}
