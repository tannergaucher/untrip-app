import React from "react"

import { Login } from "../components/auth"
import { ContentAsideGrid } from "../components/styles"

export default function LoginPage() {
  return (
    <ContentAsideGrid>
      <div className="content">{/* <h2>Brand content here</h2> */}</div>
      <aside>
        <Login shouldNavigateTo={`/`} />
      </aside>
    </ContentAsideGrid>
  )
}
