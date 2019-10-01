import React from "react"
import { Box } from "grommet"

import { SEO, EmailSignup } from "../components/elements"
import { Posts } from "../components/post"

const IndexPage = () => (
  <Box>
    <SEO title="Home" />
    <Posts />
    <EmailSignup />
  </Box>
)

export default IndexPage
