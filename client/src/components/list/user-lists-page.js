import React from "react"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"

import { LIST_QUERY } from "../apollo/graphql"
import { SEO, ListPlaceMap } from "../elements"
import { UserListPlaces } from "../list"

const StyledListPage = styled.div`
  .list-title {
    text-align: center;
    position: sticky;
    margin: 0 0 1rem 0;
  }

  .map-with-places {
    display: grid;
    grid-template-areas: "places map";
    grid-template-columns: 3fr 5fr;
  }

  .map {
    grid-area: map;
    position: sticky;
    top: 15vh;
    height: 70vh;
    margin: 1rem;
  }

  .places {
    grid-area: places;
    margin: 8rem 0.5rem;
  }
`

export default function ListPage({ listId }) {
  const { loading, error, data } = useQuery(LIST_QUERY, {
    variables: { listId },
  })

  if (loading) return `Loading list...`
  if (error) return `${error.message}`

  return (
    data &&
    data.list && (
      <StyledListPage>
        <SEO title={data.list.title} />
        <div className="map-with-places">
          <div className="places">
            <UserListPlaces places={data.list.places} />
          </div>
          <div className="map">
            <h2 className="list-title">{data.list.title}</h2>
            <ListPlaceMap
              lat={3.139}
              lng={101.6869}
              zoom={11}
              places={data.list.places}
              name={data.list.title}
            />
          </div>
        </div>
      </StyledListPage>
    )
  )
}
