import React from "react"
import styled from "styled-components"
import { Link, navigate } from "gatsby"

import { Button } from "../styles"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem;

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
      <Link to="/" style={{ color: `inherit`, textDecoration: `` }}>
        <h3>Untrip</h3>
      </Link>
      <nav>
        <Button
          className="login-btn"
          plain
          onClick={e => {
            e.preventDefault()
            navigate("/login")
          }}
        >
          Log In
        </Button>
        <Button
          onClick={e => {
            e.preventDefault()
            navigate("/signup")
          }}
        >
          Sign Up
        </Button>
      </nav>
    </StyledHeader>
  )
}
