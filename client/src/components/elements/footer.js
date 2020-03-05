import { Link } from "gatsby"
import React from "react"
import { useSiteMetadata } from "../hooks"

export default function Footer() {
  const { title, description } = useSiteMetadata()

  return (
    <footer className="footer padding">
      <div style={{ marginBottom: `var(--space-sm )` }}>
        <Link to="/" className="nav-link">
          <h2
            className="title"
            style={{
              margin: `0`,
              marginTop: `var(--space-sm)`,
            }}
          >
            {title}
          </h2>
          <h3 className="text--sm" style={{ marginTop: `0` }}>
            {description}
          </h3>
        </Link>
      </div>
    </footer>
  )
}
