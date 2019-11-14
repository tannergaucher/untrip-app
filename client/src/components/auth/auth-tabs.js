import React, { useState } from "react"
import styled from "styled-components"

import { Button } from "../styles"
import { Login, Signup } from "../auth"

const StyledAuthTabs = styled.div`
  color: var(--black);

  .toggle-auth {
    text-align: center;

    h4 {
      margin-bottom: 1rem;
      font-weight: lighter;
    }
  }
`

export default function AuthTabs() {
  const [show, setShow] = useState("Login")

  return (
    <StyledAuthTabs>
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
