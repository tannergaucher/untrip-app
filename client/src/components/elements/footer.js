import React from "react"
import styled from "styled-components"

import { NewsletterSignup } from "../elements"

const StyledFooter = styled.footer`
  background: var(--brand);
  color: white;
  padding: 2rem;
  min-height: 80vh;

  .site-title {
    margin: 0;
    text-transform: uppercase;
    font-size: 50px;
  }

  .site-description {
    margin: 0;
  }

  @media (max-width: 600px) {
    padding: 1rem;

    .site-title {
      font-size: 40px;
      justify-self: first baseline;
    }

    .site-description {
      display: none;
    }
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <NewsletterSignup />
      <h2 className="site-title">Untrip</h2>
      <h5 className="site-description">Curated Kuala Lumpur</h5>
    </StyledFooter>
  )
}
