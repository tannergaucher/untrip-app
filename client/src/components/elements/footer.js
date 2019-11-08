import React from "react"
import styled from "styled-components"
import { Link } from "../styles"

const StyledFooter = styled.footer`
  background: var(--brand);
  color: white;
  padding: 2rem;

  .site-title {
    margin: 0;
    text-transform: uppercase;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <Link plain>
        <h2 className="site-title">Untrip</h2>
        <h5>Curated Kuala Lumpur</h5>
      </Link>
    </StyledFooter>
  )
}
