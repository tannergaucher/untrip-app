import React, { useState } from "react"
import styled from "styled-components"

import { Map } from "../elements"
import { Button, StyledLayer, LinkButton } from "../styles"

const StyledDetails = styled.div`
  a {
    margin-right: var(--space-sm);
    margin-top: var(--space-sm);
  }

  .show-details {
    margin: var(--space-md) 0 0 0;
    display: flex;
    flex-wrap: wrap;
  }

  .only-mobile {
    display: none;
  }

  @media (max-width: 600px) {
    a {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }

    .show-details {
      flex-direction: column;
    }

    .only-mobile {
      display: inline;
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
              style={{ background: `var(--facebook)`, color: `white` }}
            >
              Facebook
            </LinkButton>
          )}

          {place.place.instagramLink && (
            <LinkButton
              href={place.place.instagramLink}
              style={{
                background: `var(--instagram)`,
                color: `white`,
              }}
            >
              Instagram
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
              style={{ background: `grey`, color: `white` }}
            >
              Website
            </LinkButton>
          )}

          {place.place.phoneNumber && (
            <LinkButton href="#">{place.place.phoneNumber}</LinkButton>
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
    <div style={{ marginTop: `.5rem` }}>
      <Button
        onClick={() => setShow(true)}
        fillMobile
        style={{
          textAlign: `left`,
          background: `var(--red)`,
          color: `var(--white)`,
        }}
      >
        Show on map
      </Button>
      {show && (
        <StyledLayer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          style={{
            padding: `0`,
            position: `relative`,
          }}
        >
          <Map
            isUserList={false}
            places={post.postPlaces}
            style={{
              height: `93vh`,
            }}
          />
          <Button
            primary
            fillMobile
            style={{
              position: `absolute`,
              bottom: `0`,
              height: `7vh`,
            }}
            onClick={() => setShow(false)}
          >
            Close
          </Button>
        </StyledLayer>
      )}
    </div>
  )
}
