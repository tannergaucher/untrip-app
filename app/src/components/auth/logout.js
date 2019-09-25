import React from "react"
import { useApolloClient } from "@apollo/react-hooks"
import { Button } from "grommet"

export default function Logout() {
  const client = useApolloClient()

  return (
    <Button
      label="Log Out"
      primary={true}
      fill={true}
      onClick={() => {
        localStorage.removeItem("token")
        client.resetStore()
      }}
    />
  )
}
