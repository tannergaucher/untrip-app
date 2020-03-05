import { Login, Signup } from "../auth"
import React, { useState } from "react"

export default function AuthTabs({ shouldNavigateTo }) {
  const [show, setShow] = useState("Login")

  return (
    <>
      {show === "Login" ? (
        <LoginTab shouldNavigateTo={shouldNavigateTo} setShow={setShow} />
      ) : (
        <SignupTab shouldNavigateTo={shouldNavigateTo} setShow={setShow} />
      )}
    </>
  )
}

const LoginTab = ({ shouldNavigateTo, setShow }) => (
  <>
    <h1 className="title">Log in</h1>
    <Login shouldNavigateTo={shouldNavigateTo} />
    <hr />
    <h4>Don't have an account yet? </h4>
    <button
      className="btn"
      onClick={() => setShow("Signup")}
      style={{ width: `100%` }}
    >
      Sign up now
    </button>
  </>
)

const SignupTab = ({ shouldNavigateTo, setShow }) => (
  <>
    <h1 className="title">Sign Up</h1>
    <Signup shouldNavigateTo={shouldNavigateTo} />
    <hr />
    <h4 className="auth-message">Already have an account?</h4>
    <button
      className="btn"
      onClick={() => setShow("Login")}
      style={{ width: `100%` }}
    >
      Log in
    </button>
  </>
)
