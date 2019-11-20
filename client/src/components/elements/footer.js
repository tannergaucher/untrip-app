import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background: var(--black);
  color: var(--white);
  padding: var(--space-md);

  .site-title {
    margin: 0;
    text-transform: uppercase;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <h2 className="site-title">Untrip</h2>
      <small>Curated Kuala Lumpur</small>
    </StyledFooter>
  )
}
