import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: var(--space-md);

  .site-title {
    margin: 0;
    text-transform: uppercase;
    font-weight: lighter;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <h4 className="site-title">Untrip</h4>
      <small>Curated Kuala Lumpur</small>
    </StyledFooter>
  )
}
