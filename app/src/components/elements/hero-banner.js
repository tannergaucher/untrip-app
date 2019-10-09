import React from "react"
import styled from "styled-components"

import { useSanityHeroBanner } from "../hooks"

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;

  .heading,
  .subHeading {
    font-weight: 900;
  }

  .subHeading {
    /* text-transform: uppercase; */
  }
`

export default function HeroBanner() {
  const { heading, subHeading, image } = useSanityHeroBanner()

  return (
    <StyledHeader>
      <h1 className="heading">{heading}</h1>
      <h3 className="subHeading">{subHeading}</h3>
    </StyledHeader>
  )
}
