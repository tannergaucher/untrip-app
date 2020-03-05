import React from "react"
import { Signup } from "../components/auth"

export default function LoginPage() {
  return (
    <div className="container center page padding">
      <h1 className="title">Sign up</h1>
      <Signup shouldNavigateTo={"/"} />
    </div>
  )
}
