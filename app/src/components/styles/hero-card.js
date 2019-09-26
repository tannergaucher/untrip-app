import React from "react"
import Img from "gatsby-image"

import { Box, Heading } from "grommet"

export default function HeroCard({ text, fluid }) {
  return (
    <Box margin={{ bottom: "large" }} style={{ position: `relative` }}>
      <Heading
        margin="none"
        color="light-1"
        level="3"
        style={{
          zIndex: `1`,
          position: `absolute`,
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
          textAlign: `center`,
        }}
      >
        {text}
      </Heading>
      <Img
        fluid={fluid}
        style={{
          filter: `brightness(.7)`,
          height: "250px",
        }}
      />
    </Box>
  )
}
