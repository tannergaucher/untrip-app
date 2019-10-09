import React, { useState } from "react"
import styled from "styled-components"

// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Domain,
//   Phone,
//   MapLocation,
// } from "grommet-icons"

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
          {/* TODO DISPLAY SHOW ON MAP OPTION ONLY MOBILE */}

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
          {place.place.phoneNumber && (
            <a href="#">
              <h5>{place.place.phoneNumber}</h5>
            </a>
          )}
        </div>
      )}
    </StyledDetails>
  )
}
