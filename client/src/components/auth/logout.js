import React from "react"
import { navigate } from "gatsby"
import { useApolloClient } from "@apollo/react-hooks"

import { Button } from "../styles"

export default function Logout({ shouldNavigateTo }) {
  const client = useApolloClient()

  return (
    <Button
      fillMobile
      onClick={() => {
        client.resetStore()
        localStorage.removeItem("token")

        if (shouldNavigateTo) {
          navigate(shouldNavigateTo)
        }
      }}
    >
      Log Out
    </Button>
  )
}
