import React from "react"
import { Router } from "@reach/router"

import { PublicUserPage, PublicUserListPage } from "../components/user"

export default function App() {
  return (
    <>
      <Router>
        <PublicUserPage path="/app/user/:userId" />
        <PublicUserListPage path="/app/list/:listId" />
      </Router>
    </>
  )
}
