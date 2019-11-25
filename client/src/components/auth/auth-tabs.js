import React, { useState } from "react"
import styled from "styled-components"

import { Button } from "../styles"
import { Login, Signup } from "../auth"

const StyledAuthTabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  height: 100%;

  .toggle-auth {
    text-align: center;
    margin: var(--space-md);
  }

  .auth-message {
    font-weight: lighter;
    margin-bottom: var(--space-md);
  }
`

export default function AuthTabs({ shouldNavigateTo }) {
  const [show, setShow] = useState("Login")

  return (
    <StyledAuthTabs>
      {show === "Login" ? (
        <Login shouldNavigateTo={shouldNavigateTo} />
      ) : (
        <Signup shouldNavigateTo={shouldNavigateTo} />
      )}
      {show === "Login" && (
        <div className="toggle-auth">
          <h4 className="auth-message">Don't have an account yet? </h4>
          <Button onClick={() => setShow("Signup")}>Sign up now</Button>
        </div>
      )}
      {show === "Signup" && (
        <div className="toggle-auth">
          <h4 className="auth-message">Already have an account?</h4>
          <Button onClick={() => setShow("Login")}>Log in</Button>
        </div>
      )}
    </StyledAuthTabs>
  )
}
