import React from "react"
import styled from "styled-components"

import { Divider } from "../styles"

const Styled = styled.div``

export default function About() {
  return (
    <Styled className="sticky">
      <h2 className="side-title">About Untrip</h2>
      <h4>The product description goes here.</h4>
      <h4>Create an account </h4>
      <h4>Subscribe</h4>
      <h4>Share on social</h4>
      <Divider />
    </Styled>
  )
}
