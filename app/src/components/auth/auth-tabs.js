import React, { useState } from "react"
import styled from "styled-components"

import { Login, Signup } from "../auth"
import { Button } from "../styles"

const StyledAuthTabs = styled.div`
  color: black;

  h2 {
    text-align: center;
    font-weight: 900;
  }

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
      <h2>Please sign in to do that</h2>
      {show === "Login" ? <Login /> : <Signup />}
      {show === "Login" && (
        <div className="toggle-auth">
          <h4>Don't have an account yet? </h4>
          <Button onClick={() => setShow("Signup")}>Sign up now</Button>
        </div>
      )}
      {show === "Signup" && (
        <div className="toggle-auth">
          <h4>Already have an account?</h4>
          <Button onClick={() => setShow("Login")}>Log in</Button>
        </div>
      )}
    </StyledAuthTabs>
  )
}
