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

  @media (max-width: 600px) {
    padding: 2rem 1rem;

    .site-title {
      font-size: 40px;
      justify-self: first baseline;
    }

    .responsive-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <div className="responsive-flex">
        <div className="site-details">
          <h2 className="site-title">Untrip</h2>
          <h6 className="site-description">Curated Kuala Lumpur</h6>
        </div>
      </div>
      <Divider bgDark />
    </StyledFooter>
  )
}
