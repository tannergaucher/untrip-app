import React from "react"
import { useApolloClient } from "@apollo/react-hooks"
import { Button } from "../styles"

export default function logout() {
  const client = useApolloClient()

  return (
    <Button
      width={[1]}
      mt={[2]}
      onClick={() => {
        localStorage.removeItem("token")
        client.resetStore()
      }}
    >
      Log Out
    </Button>
  )
}
