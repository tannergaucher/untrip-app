import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { useQuery } from "@apollo/react-hooks"

import { Menu } from "../elements"
import { Button, Link } from "../styles"
import { IS_LOGGED_IN } from "../apollo/graphql"

const StyledHeader = styled.header`
  padding: var(--space-md);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .site-title {
    margin: 0;
    line-height: 1;
    text-transform: uppercase;
    font-weight: lighter;
  }

  .site-description {
    line-height: 1;
  }

  .only-mobile {
    display: none;
  }

  .my-lists-btn {
    margin-right: var(--space-md);
  }

  @media (max-width: 1024px) {
    padding: var(--space-sm);

    .only-full-size {
      display: none;
    }

    .only-mobile {
      display: inline;
    }
  }
`

export default function Header() {
  const { loading, data } = useQuery(IS_LOGGED_IN)

  if (loading) return

  return (
    <StyledHeader>
      <div className="site-title-description">
        <Link to="/" plain="true">
          <h4 className="site-title">Untrip</h4>
        </Link>
        <small className="site-description only-full-size">
          Curated Kuala Lumpur
        </small>
      </div>
      <div>
        <div className="only-full-size">
          {data && data.isLoggedIn ? (
            <>
              <Button
                primary
                className="my-lists-btn"
                onClick={() => navigate(`/lists`)}
              >
                My Lists
              </Button>
              <Button onClick={() => navigate(`/account`)}>Account</Button>
            </>
          ) : (
            <Button
              primary
              onClick={e => {
                e.preventDefault()
                navigate("/login")
              }}
            >
              Log In
            </Button>
          )}
        </div>
        <div className="only-mobile">
          <Menu />
        </div>
      </div>
    </StyledHeader>
  )
}
