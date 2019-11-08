import React from "react"
import styled from "styled-components"
import { Link } from "../styles"

import { NewsletterSignup } from "../elements"

const StyledFooter = styled.footer`
  background: var(--brand);
  color: white;
  padding: 2rem;
  min-height: 80vh;

  .site-title {
    margin: 0;
    text-transform: uppercase;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <NewsletterSignup />
      <h2 className="site-title">Untrip</h2>
      <h5>Curated Kuala Lumpur</h5>
    </StyledFooter>
  )
}
