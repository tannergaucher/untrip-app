import React, { useState } from "react"
import styled from "styled-components"

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

  @media (max-width: 1100px) {
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
              Facebook
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
              style={{
                backgroundColor: `var(--grey)`,
                borderColor: `var(--grey)`,
                color: `var(--white)`,
              }}
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
    <>
      <Button
        onClick={() => setShow(true)}
        style={{
          color: `var(--white)`,
          background: `var(--red)`,
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
    </>
  )
}
