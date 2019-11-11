import React from "react"
import { useApolloClient } from "@apollo/react-hooks"

import { Button } from "../styles"

export default function Logout() {
  const client = useApolloClient()

  return (
    <Button
      fillMobile
      onClick={() => {
        localStorage.removeItem("token")
        client.resetStore()
      }}
    >
      Log Out
    </Button>
  )
}
