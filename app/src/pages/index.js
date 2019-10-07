import React from "react"

import { Posts } from "../components/post"
import { SEO, EmailSignup } from "../components/elements"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Posts />
    <EmailSignup />
  </>
)

export default IndexPage
