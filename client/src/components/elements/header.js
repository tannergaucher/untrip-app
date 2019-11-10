import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { useQuery } from "@apollo/react-hooks"

import { Menu } from "../elements"
import { Button, Link } from "../styles"
import { IS_LOGGED_IN } from "../apollo/graphql"

const StyledHeader = styled.header`
  padding: 0 2rem 2rem 2rem;

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: flex;

    a {
      margin-right: 2rem;
    }
  }

  .nav-link {
    text-transform: uppercase;
    font-weight: 900;

    &:last-child {
      margin-right: 0;
    }
  }

  .site-title-description {
    margin: 2rem 0;
  }

  .site-title {
    font-size: var(--heading);
    text-transform: uppercase;
    font-weight: 900;
    margin: 0;
  }

  .site-description {
    margin: 0;
    color: var(--accent);
    font-weight: 900;
  }

  .auth-btn,
  .authed-btn {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }

  .divider {
    border: 6px solid black;
    background: black;
  }

  .mobile-menu-btn {
    display: none;
  }

  @media (max-width: 1200px) {
    .nav-link {
      font-size: 20px;
    }
  }

  @media (max-width: 1000px) {
    .full-size {
      display: none;
    }

    .mobile-menu-btn {
      display: inline;
    }
  }

  @media (max-width: 800px) {
    padding: 0 0.5rem;

    .site-title {
      font-size: 40px;
    }
  }
`

export default function Header() {
  const { data } = useQuery(IS_LOGGED_IN)

  return (
    <StyledHeader>
      <div className="flex">
        <div className="site-title-description">
          <Link to="/" plain>
            <h2 className="site-title">Untrip</h2>
          </Link>
          <h6 className="site-description"> Curated Kuala Lumpur</h6>
        </div>
        <nav className="full-size">
          <Link to="/food-and-drink" plain>
            <h2 className="nav-link">Food & Drink</h2>
          </Link>
          <Link to="/music" plain>
            <h2 className="nav-link">Music</h2>
          </Link>
          <Link to="/culture" plain>
            <h2 className="nav-link">Culture</h2>
          </Link>
        </nav>
        <div className="btns">
          {data && data.isLoggedIn ? <AuthedBtns /> : <AuthBtns />}
        </div>
      </div>
      <div className="divider" />
    </StyledHeader>
  )
}

function AuthBtns() {
  return (
    <>
      <Button
        className="auth-btn full-size"
        primary
        onClick={e => {
          e.preventDefault()
          navigate("/signup")
        }}
      >
        Sign Up
      </Button>
      <Button
        className="auth-btn full-size"
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

function AuthedBtns() {
  return (
    <>
      <Button
        className="authed-btn full-size"
        primary
        onClick={() => navigate(`/lists`)}
      >
        My Lists
      </Button>
      <Button
        className="authed-btn full-size"
        onClick={() => navigate(`/account`)}
      >
        Account
      </Button>
      <div className="mobile-menu-btn">
        <Menu />
      </div>
    </>
  )
}
