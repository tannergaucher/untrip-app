import React, { useState } from "react"
import styled from "styled-components"
import {
  FacebookOption,
  Instagram,
  Domain,
  Phone,
  MapLocation,
  Close,
} from "grommet-icons"

import { Map } from "../elements"
import { Button, StyledLayer, LinkButton } from "../styles"

const StyledDetails = styled.div`
  a {
    margin-right: var(--space-sm);
    margin-bottom: var(--space-md);
  }

  .show-details {
    margin: var(--space-md) 0 0 0;
    display: flex;
    flex-wrap: wrap;
  }

  .only-mobile {
    display: none;
  }

  @media (max-width: 1024px) {
    a {
      margin-right: 0;
    }

    .show-details {
      flex-direction: column;
    }

    .only-mobile {
      display: block;
      width: 100%;
    }
  }
`

export default function Details({ place, post }) {
  const [show, setShow] = useState(false)

  return (
    <StyledDetails>
      <Button
        onClick={() => setShow(!show)}
        style={{
          borderColor: show ? "var(--grey)" : "var(--black)",
          color: show ? "var(--grey)" : "var(--black)",
        }}
      >
        Details
      </Button>
      {show && (
        <div className="show-details">
          {place.place.facebookLink && (
            <LinkButton
              href={place.place.facebookLink}
              style={{
                backgroundColor: `var(--facebook)`,
                borderColor: `var(--facebook)`,
                color: `white`,
              }}
            >
              <FacebookOption size="var(--text-md)" color="var(--white)" />
            </LinkButton>
          )}

          {place.place.instagramLink && (
            <LinkButton
              href={place.place.instagramLink}
              style={{
                backgroundColor: `var(--instagram)`,
                borderColor: `var(--instagram)`,
                color: `var(--white)`,
              }}
            >
              <Instagram size="var(--text-md)" color="var(--white)" />
            </LinkButton>
          )}
          {place.place.twitterLink && (
            <LinkButton
              href={place.place.twitterLink}
              style={{ color: `var(--twitter)` }}
            >
              Twitter
            </LinkButton>
          )}
          {place.place.websiteLink && (
            <LinkButton
              href={place.place.websiteLink}
              style={{
                backgroundColor: `var(--grey)`,
                borderColor: `var(--grey)`,
                color: `var(--white)`,
              }}
            >
              <Domain size="var(--text-md)" color="var(--white)" />
            </LinkButton>
          )}

          {place.place.phoneNumber && (
            <LinkButton
              href="#"
              style={{ display: `flex`, alignItems: `center` }}
            >
              <Phone
                size="var(--text-md)"
                color="var(--black)"
                style={{ marginRight: `var(--space-sm)` }}
              />
              {place.place.phoneNumber}
            </LinkButton>
          )}

          <div className="only-mobile">
            <ShowOnMap post={post} />
          </div>
        </div>
      )}
    </StyledDetails>
  )
}

function ShowOnMap({ post }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button
        onClick={() => setShow(true)}
        fillMobile
        primary
        style={{
          textAlign: `left`,
        }}
      >
        <MapLocation size="var(--text-md)" color="var(--white)" />
      </Button>
      {show && (
        <StyledLayer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          full={true}
          style={{
            padding: `0`,
            position: `relative`,
          }}
        >
          <Map
            isUserList={false}
            places={post.postPlaces}
            style={{
              height: `100vh`,
            }}
          />
          <Button
            primary
            fillMobile
            style={{
              position: `absolute`,
              bottom: `0`,
              padding: `var(--space-sm)`,
            }}
            onClick={() => setShow(false)}
          >
            <Close size="var(--text-md)" color="var(--white)" />
          </Button>
        </StyledLayer>
      )}
    </>
  )
}
