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
        margin="small"
        icon={<MenuIcon color="dark-3" />}
      />

      {show && (
        <>
          <Layer
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
            onClickCapture={() => setShow(false)}
            position="right"
            full="vertical"
            responsive={false}
            modal={true}
          >
            <Box>
              <Button
                plain={true}
                onClick={() => setShow(false)}
                style={{ border: `none` }}
                icon={<Close color="var(--dark-3)" />}
              />
              <MenuNav />
            </Box>
          </Layer>
        </>
      )}
    </>
  )
}

const MenuNav = () => (
  <Box pad="medium">
    <MenuItem text="Home" to="/" />
    <MenuItem text="Guide" to="guide" />
    <MenuItem text="Untrips" to="untrips" />
    <MenuItem text="Account" to="account" />
  </Box>
)

const MenuItem = ({ text, to }) => (
  <Link
    to={to}
    color="inherit"
    style={{ textDecoration: `none`, color: `inherit` }}
  >
    <Heading level="2">{text}</Heading>
  </Link>
)
