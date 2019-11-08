import React from "react"

import { Login } from "../components/auth"

export default function LoginPage() {
  return (
    <>
      <div className="welcome-message">
        <h2>Some message here...</h2>
      </div>
      <div className="auth">
        <h3>Log in to your account</h3>
        <Login />
      </div>
    </>
  )
}
