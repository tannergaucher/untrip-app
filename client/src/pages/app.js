import React from "react"
import { Router } from "@reach/router"

import { UserListsPage } from "../components/list"

export default function App() {
  return (
    <>
      <Router>
        <UserListsPage path="/app/lists/list/:listId" />
      </Router>
    </>
  )
}
