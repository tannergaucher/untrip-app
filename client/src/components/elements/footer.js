import React from "react"
import styled from "styled-components"

import { Divider } from "../styles"
import { Menu } from "../elements"

const StyledFooter = styled.footer`
  background: var(--black);
  color: white;
  padding: 2rem;

  .site-title {
    margin: 0;
    text-transform: uppercase;
    font-size: 50px;
  }

  .site-description {
    margin: 0;
  }

  .only-mobile {
    display: none;
  }

  @media (max-width: 600px) {
    padding: 2rem 1rem;

    .site-title {
      font-size: 40px;
      justify-self: first baseline;
    }

    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .only-mobile {
      display: inline;
    }
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <div className="flex">
        <div className="site-details">
          <h2 className="site-title">Untrip</h2>
          <h6 className="site-description">Curated Kuala Lumpur</h6>
        </div>
        <div className="only-mobile">
          <Menu />
        </div>
      </div>
      <Divider bgLight={false} />
    </StyledFooter>
  )
}
