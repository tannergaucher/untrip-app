import React, { useState } from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"

import { Layer } from "grommet"
import { Button, Link, Divider } from "../styles"
import { IS_LOGGED_IN } from "../apollo/graphql"

const StyledLayer = styled(Layer)`
  color: var(--black);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .menu-link {
    font-weight: 900;
    text-transform: uppercase;
  }
`

export default function Menu() {
  const [show, setShow] = useState(false)
  const { data } = useQuery(IS_LOGGED_IN)

  return (
    <>
      <Button onClick={() => setShow(!show)} primary>
        Menu
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
              <h2 className="menu-link">Food / Drink</h2>
            </Link>
            <Link to="/music" plain>
              <h2 className="menu-link">Music</h2>
            </Link>
            <Link to="/culture" plain>
              <h2 className="menu-link">Culture</h2>
            </Link>
            <Link to="/this-month" plain>
              <h2 className="menu-link">This Month</h2>
            </Link>
            <Divider bgLight={true} />
            {data && data.isLoggedIn ? <AuthedLinks /> : <AuthLinks />}
          </StyledLayer>
        </>
      )}
    </>
  )
}

const AuthedLinks = () => (
  <>
    <Link to="/lists" plain>
      <h2 className="menu-link">My Lists</h2>
    </Link>
    <Link to="/account" plain>
      <h2 className="menu-link">Account</h2>
    </Link>
  </>
)

const AuthLinks = () => (
  <>
    <Link to="/login" plain>
      <h2 className="menu-link">Login</h2>
    </Link>
    <Link to="/signup" plain>
      <h2 className="menu-link">Sign Up</h2>
    </Link>
  </>
)
