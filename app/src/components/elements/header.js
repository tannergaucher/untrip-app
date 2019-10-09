import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Button } from "../styles"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: white;
  z-index: 3;
  padding: 1rem;
  box-shadow: var(--elevation-1);

  h3 {
    margin: 0;
  }

  .login-btn {
    margin-right: 0.5rem;
  }
`

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/" style={{ color: `inherit` }}>
        <h3>Untrip</h3>
      </Link>
      <nav>
        <Button className="login-btn">Log In</Button>
        <Button primary>Sign Up</Button>
      </nav>
    </StyledHeader>
  )
}
