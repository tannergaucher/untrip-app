import React from "react"
import { Box } from "grommet"

import { SEO } from "../components/elements"
import { Posts } from "../components/post"

const IndexPage = () => (
  <Box>
    <SEO title="Home" />
    <Posts />
  </Box>
)

export default IndexPage
