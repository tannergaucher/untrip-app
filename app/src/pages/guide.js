import React from "react"
import { Box } from "rebass"

import { Categories } from "../components/category"
import { SEO } from "../components/elements"

export default function Guide() {
  return (
    <>
      <SEO title={`Guide`} />
      <Box my={[2]} px={[2]}>
        <Categories />
      </Box>
    </>
  )
}
