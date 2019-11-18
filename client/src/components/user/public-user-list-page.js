import React from "react"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"

import { Map, Share } from "../elements"
import { LIST_QUERY } from "../apollo/graphql"
import { useWindowSize } from "../hooks"

const StyledListPage = styled.div`
  margin: 0 2rem;

  .list-title {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }

  .list-author {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .list-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 600px) {
    margin: 0 0.5rem;

    .list-title {
      margin-top: 1rem;
      margin-bottom: 0;
    }

    .list-details {
      flex-direction: column;
      align-items: flex-start;
    }

    .share {
      color: red;
    }
  }
`

export default function UserListPage({ listId }) {
  const size = useWindowSize()

  const { data, loading, error } = useQuery(LIST_QUERY, {
    variables: {
      listId,
    },
  })

  return (
    <StyledListPage>
      {loading && <h2>Loading list...</h2>}
      {error && `Error`}
      {data && data.list && (
        <>
          <div className="list-details">
            <h1 className="list-title">{data.list.title}</h1>
            {/* get pinterest image from site metadata */}
            <Share href={`/app/list/${data.list.id}`} pinterestImage={""} />
          </div>

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
