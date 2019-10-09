import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledFooter = styled.footer`
  background: var(--brand);
  color: white;
  padding: 1rem;

  h3 {
    margin: 0;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <Link
        style={{
          color: `inherit`,
        }}
      >
        <h3>Untrip</h3>
      </Link>
    </StyledFooter>
  )
}
