import React from "react"

import { Signup } from "../components/auth"

export default function SignupPage() {
  return (
    <>
      <div className="welcome-message">
        <h2>Some message here</h2>
      </div>
      <div className="auth">
        <h3>Sign up for an account </h3>
        <Signup />
      </div>
    </>
  )
}