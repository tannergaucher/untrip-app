import React, { useState } from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"

import { Layer } from "grommet"
import { Menu as MenuIcon } from "grommet-icons"
import { Button, Link } from "../styles"
import { IS_LOGGED_IN } from "../apollo/graphql"

const StyledLayer = styled(Layer)`
  /* override grommet default */
  color: var(--black);
  padding: var(--space-md);
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .menu-link {
    text-transform: uppercase;
  }
`

export default function Menu() {
  const [show, setShow] = useState(false)
  const { data } = useQuery(IS_LOGGED_IN)

  return (
    <>
      <Button
        onClick={() => setShow(!show)}
        style={{
          border: `none`,
          padding: `var(--space-sm) 0 var(--space-sm) var(--space-sm)`,
        }}
      >
        <MenuIcon color="var(--black)" />
      </Button>
      {show && (
        <>
          <StyledLayer
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
            onClickCapture={() => setShow(false)}
            position="right"
            full="vertical"
            responsive={false}
            modal={true}
          >
            <Link to="/food-and-drink" plain>
              <h3 className="menu-link">Food & Drink</h3>
            </Link>
            <Link to="/music" plain>
              <h3 className="menu-link">Music</h3>
            </Link>
            <Link to="/culture" plain>
              <h3 className="menu-link">Culture</h3>
            </Link>
            <Link to="/this-month" plain>
              <h3 className="menu-link">This Month</h3>
            </Link>
            {data && data.isLoggedIn ? <AuthedLinks /> : <AuthLinks />}
          </StyledLayer>
        </>
      )}
    </>
  )
}

const AuthedLinks = () => (
  <>
    <br />
    <Link to="/lists" plain>
      <h3 className="menu-link">My Lists</h3>
    </Link>
    <Link to="/account" plain>
      <h3 className="menu-link">Account</h3>
    </Link>
  </>
)

const AuthLinks = () => (
  <>
    <Link to="/login" plain>
      <h3 className="menu-link">Login</h3>
    </Link>
    <Link to="/signup" plain>
      <h3 className="menu-link">Sign Up</h3>
    </Link>
  </>
)
