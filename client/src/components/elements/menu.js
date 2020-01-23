import React, { useState } from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"

import { Layer } from "grommet"
import { Menu as MenuIcon } from "grommet-icons"
import { Button, Link } from "../styles"
import { IS_LOGGED_IN } from "../apollo/graphql"

const StyledLayer = styled(Layer)`
  /* override grommet defaults */
  color: var(--text-color);
  border-radius: 0;
  /* */
  padding: var(--space-md);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: var(--bg-1);

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
        <MenuIcon color="var(--text-color)" />
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
            {/* TODO: MAKE DYNAMIC. QUERY CMS CATEGORIES AND MAP. USE USEALLCATEGORIES HOOK */}
            <Link to="/food-and-drink" plain>
              <h3 className="menu-link">Food & Drink</h3>
            </Link>
            <Link to="/entertainment" plain>
              <h3 className="menu-link">Entertainment</h3>
            </Link>
            <Link to="/curated-kl" plain>
              <h3 className="menu-link">Curated KL</h3>
            </Link>
            <br />
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
  </>
)
