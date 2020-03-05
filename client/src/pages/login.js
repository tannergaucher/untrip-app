import { Login } from "../components/auth"
import React from "react"

export default function LoginPage() {
  return (
    <div className="container center page padding">
      <h1 className="title">Login</h1>
      <Login shouldNavigateTo={`/`} />
    </div>
  )
}
