import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import styled from "styled-components"
import { space, fontSize } from "styled-system"

const StyledBlockContent = styled(BlockContent)`
  ${space}
  ${fontSize}
`

export default function MyBlockContent(props, { children }) {
  return <StyledBlockContent {...props}>{children}</StyledBlockContent>
}
