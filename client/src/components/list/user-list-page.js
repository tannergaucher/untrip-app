import React from "react"
import { useQuery } from "@apollo/react-hooks"
import Img from "gatsby-image"
import styled from "styled-components"

import { Map } from "../elements"
import { ContentAsideGrid } from "../styles"
import { LIST_QUERY } from "../apollo/graphql"

const StyledListPlace = styled.div``

export default function UserListPage({ listId }) {
  const { data, loading, error } = useQuery(LIST_QUERY, {
    variables: {
      listId,
    },
  })

  return (
    <ContentAsideGrid>
      <div className="content">
        {loading && <h2>Loading list...</h2>}
        {error && `${error.message}`}
        {data && data.list && (
          <>
            {data.list.places.map(place => (
              <StyledListPlace key={place.id}>
                <h2>{place.name}</h2>
                <Img fluid={JSON.parse(place.imageUrl)} />
              </StyledListPlace>
            ))}
          </>
        )}
      </div>

      <aside>
        {data && data.list && (
          <div className="map-container sticky">
            <h2>{data.list.title}</h2>
            <Map
              places={[]}
              style={{
                height: `71vh`,
                maxWidth: `500px`,
              }}
            />
          </div>
        )}
      </aside>
    </ContentAsideGrid>
  )
}
