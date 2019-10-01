import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Previous } from "grommet-icons"
import { Box, Heading, Button } from "grommet"

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
        pad="small"
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
      <Img fluid={image.asset.fluid} style={{ filter: `brightness(.6)` }} />
    </Box>
  )
}

function PostHeader() {
  return
}

function PlainHeader({ light }) {
  const { heading } = useSanityHeroBanner()
  return (
    <Box
      as="header"
      direction="row"
      justify="between"
      align="center"
      background={light ? "" : "white"}
      // style={{ position: `sticky`, top: "0", zIndex: "3", opacity: ".97" }}
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
      <Menu light />
    </Box>
  )
}

export default function Header({ location }) {
  if (location.pathname === "/") return <IndexHeader />

  return <PlainHeader />
}
