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

  h3 {
    margin: 0;
  }

  .login-btn {
    margin-right: 0.5rem;
  }
`

export default function Header() {
  const { data, loading, error } = useQuery(IS_LOGGED_IN)

  return (
    <StyledHeader>
      <Link to="/" style={{ color: `inherit`, textDecoration: `none` }}>
        <h3>Untrip</h3>
      </Link>
      {data.isLoggedIn ? <AuthNav /> : <Nav />}
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

// Responsive auth nav
// media query. Display nav links or menu icon

const StyledAuthNav = styled.nav`
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

function AuthNav() {
  return (
    <StyledAuthNav>
      <div className="full">
        <Link
          to="/"
          style={{
            color: `inherit`,
          }}
        >
          <h3>Lists</h3>
        </Link>
        <Link
          to="/"
          style={{
            color: `inherit`,
          }}
        >
          <h3>Account</h3>
        </Link>
      </div>

      <div className="mobile">
        <Button plain>
          <Menu color="black" />
        </Button>
      </div>
    </StyledAuthNav>
  )
}
