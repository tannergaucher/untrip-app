import { IS_LOGGED_IN } from "../apollo/graphql"
import { Link } from "gatsby"
import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { useSiteMetadata } from "../hooks"

export default function Header() {
  const { title, description } = useSiteMetadata()
  const { loading, data } = useQuery(IS_LOGGED_IN)

  if (loading) return

  return (
    <header className="header padding">
      <div style={{ marginBottom: `var(--space-md)` }}>
        <Link to="/" className="nav-link">
          <h2
            className="title"
            style={{ margin: `0`, marginTop: `var(--space-sm)` }}
          >
            {title}
          </h2>
        </Link>
        <small
          style={{
            marginRight: `var(--space-md)`,
          }}
        >
          {description}
        </small>
      </div>
      {data && data.isLoggedIn ? <AuthedNav /> : <Nav />}
    </header>
  )
}

const Nav = () => (
  <nav className="nav">
    <Link to="/login" className="nav-link">
      <h4>Log In</h4>
    </Link>
    <Link to="/signup" className="nav-link">
      <h4>Sign Up</h4>
    </Link>
  </nav>
)

const AuthedNav = () => (
  <nav className="nav">
    <Link to="/my-lists" className="nav-link">
      <h4>My Lists</h4>
    </Link>
    <Link to="/account" className="nav-link">
      <h4>Account</h4>
    </Link>
  </nav>
)
