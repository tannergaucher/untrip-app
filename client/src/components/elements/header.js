import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { useQuery } from "@apollo/react-hooks"

import { Menu } from "../elements"
import { Button, Link } from "../styles"
import { IS_LOGGED_IN } from "../apollo/graphql"

const StyledHeader = styled.header`
  padding: 0 2rem 2rem 2rem;

  .responsive-flex {
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
  }

  .auth-btn,
  .authed-btn {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }

  .mobile-menu-btn {
    display: none;
  }

  .divider {
    border: 6px solid var(--black);
  }

  @media (max-width: 1200px) {
    .nav-link {
      font-size: 20px;
    }
  }

  @media (max-width: 1000px) {
    .only-full-size {
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

  @media (max-width: 600px) {
    .divider {
      border: 3px solid var(--black);
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
            <h2 className="site-title">Untrip</h2>
          </Link>
          <h6 className="site-description"> Curated Kuala Lumpur</h6>
        </div>
        <nav className="only-full-size">
          <Link to="/food-and-drink" plain="true">
            <h2 className="nav-link">Food & Drink</h2>
          </Link>
          <Link to="/music" plain="true">
            <h2 className="nav-link">Music</h2>
          </Link>
          <Link to="/culture" plain="true">
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
