import React from "react"
import styled from "styled-components"
import { Link, navigate } from "gatsby"
import { useQuery } from "@apollo/react-hooks"
import { Menu } from "grommet-icons"

import { Button } from "../styles"
import { IS_LOGGED_IN } from "../apollo/graphql"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem;

  a {
    color: inherit;
    text-decoration: none;
  }

  h3 {
    margin: 0;
  }

  .login-btn {
    margin-right: 0.5rem;
  }
`

export default function Header() {
  const { data } = useQuery(IS_LOGGED_IN)

  return (
    <StyledHeader>
      <Link to="/">
        <h3>Untrip</h3>
      </Link>
      {data.isLoggedIn ? <AuthedNav /> : <Nav />}
    </StyledHeader>
  )
}

function Nav() {
  return (
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
  )
}

const StyledAuthedNav = styled.nav`
  .full {
    display: flex;

    a {
      margin-left: 1rem;
    }
  }

  @media (max-width: 600px) {
    .full {
      display: none;
    }
  }

  @media (min-width: 600px) {
    .mobile {
      display: none;
    }
  }
`

function AuthedNav() {
  return (
    <StyledAuthedNav>
      <div className="full">
        <Link to="/">
          <h3>Lists</h3>
        </Link>
        <Link to="/">
          <h3>Account</h3>
        </Link>
      </div>
      <div className="mobile">
        <Button plain>
          <Menu color="black" />
        </Button>
      </div>
    </StyledAuthedNav>
  )
}
