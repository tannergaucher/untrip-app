import React from "react"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"

import { Map, Share } from "../elements"
import { LIST_QUERY } from "../apollo/graphql"
import { useWindowSize } from "../hooks"

const StyledListPage = styled.div`
  margin: 0 var(--space-md);

  @media (max-width: 1024) {
    margin: 0 var(--space-sm);
  }
`

export default function UserListPage({ listId }) {
  const size = useWindowSize()

  const { data, loading, error } = useQuery(LIST_QUERY, {
    variables: {
      listId,
    },
  })

  if (loading) return `Loading...`
  if (error) return `Error: ${error.message}`

  return (
    <StyledListPage>
      {data && data.list && (
        <>
          <h1 className="list-title">{data.list.title}</h1>
          <Share href={`/app/list/${data.list.id}`} />
          <div className="full-size-map">
            <Map
              places={data.list.places}
              isUserList={true}
              style={{
                maxWidth:
                  size.width > 600 ? `calc(100% - 4rem)` : `calc(100% - 1rem)`,
                height: size.width > 600 ? `71vh` : `76vh`,
              }}
            />
          </div>
        </>
      )}
    </StyledListPage>
  )
}
