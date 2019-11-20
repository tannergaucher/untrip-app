import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { useQuery } from "@apollo/react-hooks"

import { Menu } from "../elements"
import { Button, Link } from "../styles"
import { IS_LOGGED_IN } from "../apollo/graphql"

const StyledHeader = styled.header`
  padding: var(--space-md);

  .responsive-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .site-title {
    margin: 0;
  }

  .auth-btn,
  .authed-btn {
    margin-right: var(--space-md);
    &:last-child {
      margin-right: 0;
    }
  }

  .mobile-menu-btn {
    display: none;
  }

  @media (max-width: 1100px) {
    padding: var(--space-sm);

    .only-full-size {
      display: none;
    }

    .mobile-menu-btn {
      display: inline;
    }
  }
`

export default function Header() {
  const { data } = useQuery(IS_LOGGED_IN)

  return (
    <StyledHeader>
      <div className="responsive-flex">
        <div className="site-title-description">
          <Link to="/" plain="true">
            <h3 className="site-title">Untrip</h3>
          </Link>
          <small className="site-description">Curated Kuala Lumpur</small>
        </div>
        <div className="btns">
          {data && data.isLoggedIn ? <AuthedBtns /> : <AuthBtns />}
        </div>
      </div>
    </StyledHeader>
  )
}

function AuthedBtns() {
  return (
    <>
      <Button
        primary
        className="authed-btn only-full-size"
        onClick={() => navigate(`/lists`)}
      >
        My Lists
      </Button>
      <Button
        onClick={() => navigate(`/account`)}
        className="authed-btn only-full-size"
      >
        Account
      </Button>
      <div className="mobile-menu-btn">
        <Menu />
      </div>
    </>
  )
}

function AuthBtns() {
  return (
    <>
      <Button
        primary
        className="auth-btn only-full-size"
        onClick={e => {
          e.preventDefault()
          navigate("/signup")
        }}
      >
        Sign Up
      </Button>
      <Button
        className="auth-btn only-full-size"
        onClick={e => {
          e.preventDefault()
          navigate("/login")
        }}
      >
        Log In
      </Button>
      <div className="mobile-menu-btn">
        <Menu />
      </div>
    </>
  )
}
