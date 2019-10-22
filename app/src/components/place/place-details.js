import React, { useState } from "react"
import styled from "styled-components"

import { Button } from "../styles"

const StyledDetails = styled.div`
  .show-details {
    margin: 2rem 1rem;
  }
`

export default function Details({ place }) {
  const [show, setShow] = useState(false)

  return (
    <StyledDetails>
      <Button onClick={() => setShow(!show)}>Details</Button>

      {show && (
        <div className="show-details">
          {place.place.facebookLink && (
            <a href={place.place.facebookLink}>
              <h5>Facebook</h5>
            </a>
          )}
          {place.place.instagramLink && (
            <a href={place.place.instagramLink}>
              <h5>Instagram</h5>
            </a>
          )}
          {place.place.twitterLink && (
            <a href={place.place.twitterLink}>
              <h5>Twitter</h5>
            </a>
          )}
          {place.place.websiteLink && (
            <a href={place.place.websiteLink}>
              <h5>Website</h5>
            </a>
          )}
          {place.place.phoneNumber && <h5>{place.place.phoneNumber}</h5>}
        </div>
      )}
    </StyledDetails>
  )
}
