import React from "react"

import { Signup } from "../components/auth"
import { ContentAsideGrid } from "../components/styles"

export default function SignupPage() {
  return (
    <ContentAsideGrid>
      <div className="content">{/* <h2>Brand content here</h2> */}</div>

      <aside>
        <Signup />
      </aside>
    </ContentAsideGrid>
  )
}
