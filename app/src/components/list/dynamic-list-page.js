import React from "react"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"
import Img from "gatsby-image"

import { LIST_QUERY } from "../apollo/graphql"
import { SEO, ListPlaceMap } from "../elements"
import { PlaceCard } from "../place"

const StyledListPage = styled.div`
  .list-title {
    text-align: center;
  }

  .map-with-places {
    display: grid;
    grid-template-areas: "places map";
    grid-template-columns: 4fr 4fr;
  }

  .map {
    grid-area: map;
    position: sticky;
    top: 15vh;
    height: 70vh;
    margin: 2rem 3rem;

    .list-title {
      text-align: center;
    }
  }

  .places {
    grid-area: places;
    margin: 0 0.5rem;
  }
`

export default function ListPage({ listId }) {
  const { loading, error, data } = useQuery(LIST_QUERY, {
    variables: { listId },
  })

  return (
    <StyledListPage>
      {loading && `Loading list...`}
      {error && `Error: ${error.message}`}
      {data && data.list && (
        <div className="map-with-places">
          <div className="places">
            {data.list.places.map(
              place =>
                console.log(place) || (
                  <div>
                    <h2>{place.placeName}</h2>
                    <Img fluid={JSON.parse(place.placeImageUrl)} />
                  </div>
                )
            )}
          </div>

          <div className="map">
            <h3 className="list-title">{data.list.title}</h3>
            <ListPlaceMap
              lat={3.139}
              lng={101.6869}
              zoom={11}
              places={data.list.places}
              name={data.list.title}
            />
          </div>
        </div>
      )}
    </StyledListPage>
  )
}
