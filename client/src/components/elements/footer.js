import { Link } from "gatsby"
import React from "react"
import { useSiteMetadata } from "../hooks"

export default function Footer() {
  const { title, description } = useSiteMetadata()

  return (
    <footer className="footer padding">
      <div style={{ marginBottom: `var(--space-sm )` }}>
        <Link className="nav-link" to="/">
          <h2 className="title" style={{ margin: 0 }}>
            {title}
          </h2>
        </Link>
        <small>{description}</small>
      </div>
    </footer>
  )
}
