import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

import { useQuery } from "@apollo/react-hooks"
import { Menu, Facebook, Twitter } from "grommet-icons"

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
  }

  .nav-link {
    margin-right: 2rem;
    text-transform: uppercase;

    > * {
      font-weight: 900;
    }

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
  }

  .auth-btn {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }

  .divider {
    border: 6px solid black;
    background: black;
  }
`

export default function Header() {
  return (
    <StyledHeader>
      <div className="flex">
        <div className="site-title-description">
          <Link to="/" plain>
            <h2 className="site-title">Untrip</h2>
          </Link>
          <h6 className="site-description"> Curated Kuala Lumpur</h6>
        </div>

        <nav>
          <Link className="nav-link" to="/" plain>
            <h2>Food & Drink</h2>
          </Link>
          <Link className="nav-link" to="/" plain>
            <h2>Music</h2>
          </Link>
          <Link className="nav-link" to="/" plain>
            <h2>Culture</h2>
          </Link>
        </nav>

        <div className="btns">
          <AuthBtns />
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
        className="auth-btn"
        primary
        onClick={e => {
          e.preventDefault()
          navigate("/signup")
        }}
      >
        Sign Up
      </Button>

      <Button
        className="auth-btn"
        onClick={e => {
          e.preventDefault()
          navigate("/login")
        }}
      >
        Log In
      </Button>
    </>
  )
}

function AuthedBtns() {
  return (
    <>
      <Link to="/lists">
        <h3>Lists</h3>
      </Link>
      <Link to="/account">
        <h3>Account</h3>
      </Link>

      {/* <div className="mobile">
        <Button plain>
          <Menu color="black" />
        </Button>
      </div> */}
    </>
  )
}
