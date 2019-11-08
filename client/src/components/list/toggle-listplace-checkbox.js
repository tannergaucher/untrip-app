import React from "react"
import styled from "styled-components"
import { CheckBox } from "grommet"

import { useMutation } from "@apollo/react-hooks"
import { TOGGLE_PLACE_MUTATION } from "../apollo/graphql"
import { isPlaceInList } from "../../utils"

const Styled = styled.div`
  margin: 1rem 0;

  .user-list-title {
    margin: 0;
  }
`

export default function TogglePlaceCheckBox({ place, list }) {
  const [togglePlace, { loading }] = useMutation(TOGGLE_PLACE_MUTATION, {
    variables: {
      listId: list.id,
      sanityId: place.id,
      name: place.name,
      imageUrl: JSON.stringify(place.image.asset.fluid),
      slug: place.slug.current,
      lat: place.location.lat,
      lng: place.location.lng,
    },
    optimisticResponse: {
      __typename: "Mutation",
      togglePlace: {
        __typename: "List",

        id: list.id,
        listId: list.id,
        title: list.title,
        places: [
          {
            __typename: "Place",
            id: new Date(),
            sanityId: place.id,
            name: place.name,
            imageUrl: JSON.stringify(place.image.asset.fluid),
            slug: place.slug.current,
            lat: place.location.lat,
            lng: place.location.lng,
          },
        ],
      },
    },
  })

  return (
    <Styled>
      <CheckBox
        key={list.id}
        disabled={loading}
        label={<h4 className="user-list-title">{list.title}</h4>}
        // TODO: handle in apollo client
        checked={isPlaceInList(list.places, place.id)}
        onChange={async e => {
          await togglePlace()
        }}
      />
    </Styled>
  )
}
