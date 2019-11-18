import React, { useState } from "react"
import styled from "styled-components"

import { Button } from "../styles"
import { Login, Signup } from "../auth"

const StyledAuthTabs = styled.div`
  .welcome-message {
    margin-bottom: 2.5rem;
    font-size: 40px;
    font-weight: 900;
  }

  .toggle-auth,
  .welcome-message {
    text-align: center;

    .auth-message {
      margin-bottom: 1rem;
      font-weight: lighter;
    }
  }
`

export default function AuthTabs() {
  // Boolean better?
  const [show, setShow] = useState("Login")

  return (
    <StyledAuthTabs>
      <h1 className="welcome-message">Welcome to Untrip</h1>
      {show === "Login" ? <Login /> : <Signup />}
      {show === "Login" && (
        <div className="toggle-auth signup">
          <h4 className="auth-message">Don't have an account yet? </h4>
          <Button onClick={() => setShow("Signup")}>Sign up now</Button>
        </div>
      )}
      {show === "Signup" && (
        <div className="toggle-auth login">
          <h4 className="auth-message">Already have an account?</h4>
          <Button onClick={() => setShow("Login")}>Log in</Button>
        </div>
      )}
    </StyledAuthTabs>
  )
}
