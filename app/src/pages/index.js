import React from "react"

import { Posts } from "../components/post"
import { SEO, EmailSignup, SignupBanner } from "../components/elements"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Posts />
    <EmailSignup />
    <SignupBanner />
  </>
)

export default IndexPage
