import React from "react"
import Img from "gatsby-image"
import { Card, Heading } from "rebass"

export default function HeroCard({ text, fluid }) {
  return (
    <Card mb={[2]} style={{ position: `relative` }}>
      <Heading
        color="var(--light-1)"
        fontSize={[4]}
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
          // borderRadius: `10px`,
        }}
      />
    </Card>
  )
}
