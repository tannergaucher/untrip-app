import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Previous } from "grommet-icons"
import { Box, Heading, Button, Text } from "grommet"

import { Menu } from "../elements"
import { useSanityHeroBanner } from "../hooks"

function IndexHeader() {
  const { subHeading, image } = useSanityHeroBanner()
  return (
    <Box style={{ position: "relative" }}>
      <Box
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          zIndex: "3",
        }}
      >
        <PlainHeader light />
      </Box>
      <Box
        pad="medium"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "3",
        }}
      >
        <Heading textAlign="center" color="white" level="1">
          {subHeading}
        </Heading>
      </Box>
      <Box
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: "3",
        }}
        margin="large"
        justify="center"
      >
        <Button
          label={<Text color="white">Sign Up</Text>}
          style={{ background: "rgba(0, 0, 0, .7)", borderColor: "white" }}
        />
      </Box>
      <Img
        fluid={image.asset.fluid}
        style={{ filter: `brightness(.6)`, height: "90vh" }}
      />
    </Box>
  )
}

function PostHeader() {
  return null
}

export function PlainHeader({ light }) {
  const { heading } = useSanityHeroBanner()
  return (
    <Box
      as="header"
      direction="row"
      justify="between"
      align="center"
      background={light ? "" : "white"}
    >
      <Button
        plain={true}
        icon={<Previous color={light ? "white" : "black"} size="18px" />}
        margin="small"
        onClick={e => {
          e.preventDefault()
          window.history.back()
        }}
      />
      <Link
        to="/"
        style={{
          textDecoration: `none`,
          color: `inherit`,
        }}
      >
        <Heading level="3" margin="small" color={light ? "white" : "black"}>
          {heading}
        </Heading>
      </Link>
      <Menu light={light} />
    </Box>
  )
}

export default function Header({ location }) {
  if (location.pathname === "/") return <IndexHeader />

  if (location.pathname.split("/")[1] === "posts") return <PostHeader />

  return <PlainHeader />
}
