import React from "react"
import Img from "gatsby-image"

export default function HeroCard({ text, fluid }) {
  return (
    <div style={{ position: `relative` }}>
      <h4
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
      </h4>
      <Img
        fluid={fluid}
        style={{
          filter: `brightness(.7)`,
          height: "250px",
        }}
      />
    </div>
  )
}
