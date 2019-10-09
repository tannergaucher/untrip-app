import React from "react"

import { Posts } from "../components/post"
import { SEO } from "../components/elements"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Posts />
  </>
)

export default IndexPage
