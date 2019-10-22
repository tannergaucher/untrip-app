import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const StyledUserListPlace = styled.div`
  display: flex;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 12px;

  .place-image {
    flex: 1;

    img {
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }
  }

  .place-info {
    flex: 3;
    margin-left: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .place-name {
    margin: 0.5rem 0 2rem 0;
  }

  a {
    color: inherit;
  }
`

export default function UserListPlace({ place }) {
  return (
    <StyledUserListPlace>
      <div className="place-image">
        <Img fluid={JSON.parse(place.placeImageUrl)} />
      </div>
      <div className="place-info">
        <Link to="/">
          <h2 className="place-name">{place.placeName}</h2>
        </Link>
      </div>
    </StyledUserListPlace>
  )
}
