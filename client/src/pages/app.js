import { PublicListPage } from "../components/list"
import React from "react"
import { Router } from "@reach/router"

export default function App() {
  return (
    <>
      <Router>
        <PublicListPage path="/app/list/:listId" />
      </Router>
    </>
  )
}
