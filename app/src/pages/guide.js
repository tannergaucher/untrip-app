import React from "react"
import { Box } from "grommet"

import { Categories } from "../components/category"
import { SEO } from "../components/elements"

export default function Guide() {
  return (
    <>
      <SEO title={`Guide`} />
      <Box>
        <Categories />
      </Box>
    </>
  )
}
