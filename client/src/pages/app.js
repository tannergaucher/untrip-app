import React from "react"
import { Router } from "@reach/router"

import { UserListPage } from "../components/list"

export default function App() {
  return (
    <>
      <Router>
        <UserListPage path="/app/list/:listId" />
      </Router>
    </>
  )
}
