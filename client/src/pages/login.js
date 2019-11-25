import React from "react"

import { AuthTabs } from "../components/auth"
import { ContentAsideGrid } from "../components/styles"

export default function LoginPage() {
  return (
    <ContentAsideGrid>
      <div className="content">{/* <h2>Brand content here</h2> */}</div>
      <aside
        style={{
          height: `calc(100vh - var(--text-md) - var(--space-lg) )`,
        }}
      >
        <AuthTabs shouldNavigateTo={`/`} />
      </aside>
    </ContentAsideGrid>
  )
}
