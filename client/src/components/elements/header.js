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

  @media (max-width: 1024px) {
    padding: 0 var(--space-sm);

    .only-full-size {
      display: none;
    }

    .only-mobile {
      display: inline;
    }
  }
`

// Because styled components bug where Button looses classname on refresh in production...
const MyListsBtn = styled(Button)`
  margin-right: var(--space-md);
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
              <MyListsBtn primary onClick={() => navigate(`/lists`)}>
                My Lists
              </MyListsBtn>
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
