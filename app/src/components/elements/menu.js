import React, { useState } from "react"
import { Link } from "gatsby"
import { Layer } from "grommet"
import { Heading, Flex } from "rebass"
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
      <button onClick={() => setShow(!show)}>
        <MenuIcon color="var(--dark-1)" />
      </button>
      {show && (
        <Layer
          full={true}
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          onClickCapture={() => setShow(false)}
        >
          <Flex flex={1} flexDirection="column" p={[2]} bg="var(--light-1)">
            <Flex justifyContent="flex-end">
              <button onClick={() => setShow(false)}>
                <Close color="var(--dark-1)" />
              </button>
            </Flex>
            <MenuNav />
          </Flex>
        </Layer>
      )}
    </>
  )
}

const MenuNav = () => (
  <Flex
    flex={1}
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
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
  </Flex>
)

const MenuNavItem = ({ text, to, icon }) => (
  <Link to={to} color="inherit" style={{ textDecoration: `none` }}>
    <Flex flexDirection="column" alignItems="center">
      {icon}
      <Heading
        mb={[5]}
        mt={2}
        ml={[2]}
        fontSize={[5]}
        color="var(--dark-1)"
        fontWeight="900"
      >
        {text}
      </Heading>
    </Flex>
  </Link>
)
