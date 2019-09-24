import React from "react"
import Link from "gatsby-link"

export default function MyLink({ to, children }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: `none`,
        color: `inherit`,
      }}
    >
      {children}
    </Link>
  )
}
