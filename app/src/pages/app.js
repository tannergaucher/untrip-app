import React from "react"
import { Router } from "@reach/router"

import { DynamicListPage } from "../components/list"

export default function App() {
  return (
    <>
      <Router>
        <DynamicListPage path="/app/lists/list/:listId" />
      </Router>
    </>
  )
}
