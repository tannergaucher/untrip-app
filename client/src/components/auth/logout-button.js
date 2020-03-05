import React from "react"
import { navigate } from "gatsby"
import { useApolloClient } from "@apollo/react-hooks"

export default function LogoutButton({ shouldNavigateTo }) {
  const client = useApolloClient()

  return (
    <button
      className="btn"
      onClick={() => {
        client.resetStore()
        localStorage.removeItem("token")

        if (shouldNavigateTo) {
          navigate(shouldNavigateTo)
        }
      }}
    >
      Log Out
    </button>
  )
}
