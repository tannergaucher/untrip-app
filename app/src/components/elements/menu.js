import React, { useState } from "react"
import { Link } from "gatsby"
import { Layer, Heading, Box, Button } from "grommet"

import {
  Menu as MenuIcon,
  Close,
  Home,
  Navigate,
  User,
  List,
} from "grommet-icons"

export default function Menu() {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button
        plain={true}
        onClick={() => setShow(!show)}
        icon={<MenuIcon color="var(--dark-1)" />}
      />

      {show && (
        <Layer
          full={true}
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          onClickCapture={() => setShow(false)}
        >
          <Box>
            <Button
              plain={true}
              onClick={() => setShow(false)}
              style={{ border: `none` }}
              icon={<Close color="var(--dark-1)" />}
            />
            <MenuNav />
          </Box>
        </Layer>
      )}
    </>
  )
}

const MenuNav = () => (
  <Box>
    <MenuNavItem
      text="Home"
      to="/"
      icon={<Home color="var(--dark-1)" size="40px" />}
    />
    <MenuNavItem
      text="Guide"
      to="guide"
      icon={<Navigate color="var(--dark-1)" size="40px" />}
    />
    <MenuNavItem
      text="Untrips"
      to="untrips"
      icon={<List color="var(--dark-1)" size="40px" />}
    />
    <MenuNavItem
      text="Account"
      to="account"
      icon={<User color="var(--dark-1)" size="40px" />}
    />
  </Box>
)

const MenuNavItem = ({ text, to, icon }) => (
  <Link to={to} color="inherit" style={{ textDecoration: `none` }}>
    <Box>
      {icon}
      <Heading>{text}</Heading>
    </Box>
  </Link>
)
