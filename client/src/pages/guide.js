import React from "react"

import { Categories } from "../components/category"
import { SEO } from "../components/elements"

export default function Guide() {
  return (
    <>
      <SEO title={`Guide`} />
      <Categories />
    </>
  )
}
