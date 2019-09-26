import React, { useState } from "react"
import { navigate } from "gatsby"
import { Layer, Heading, Box, Button, Anchor } from "grommet"
import { Menu as MenuIcon } from "grommet-icons"

export default function Menu() {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button
        plain={true}
        onClick={() => setShow(!show)}
        margin="small"
        icon={<MenuIcon color="black" />}
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
            <Box fill="vertical">
              <MenuNav />
            </Box>
          </Layer>
        </>
      )}
    </>
  )
}

const MenuNav = () => (
  <Box pad="large" fill="vertical" justify="center" align="end">
    <MenuItem text="Home" to="/" />
    <MenuItem text="Guide" to="guide" />
    <MenuItem text="Untrips" to="untrips" />
    <MenuItem text="Account" to="account" />
  </Box>
)

const MenuItem = ({ text, to }) => (
  <Anchor
    onClick={() => {
      navigate(`/${to}`)
    }}
  >
    <Heading level="2">{text}</Heading>
  </Anchor>
)
