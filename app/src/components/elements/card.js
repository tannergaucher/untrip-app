import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledCard = styled.div`
  transition-duration: var(--duration);

  .card-category {
    color: grey;
    margin: 0.5rem 0 0 0;
  }

  .card-title {
    margin: 0;
    margin-top: 0.25rem;
  }

  &:hover {
    transform: scale(1.02);
    transition-duration: var(--duration);
  }
`

export default function Card({ fluid, title, subtitle }) {
  return (
    <StyledCard>
      <Img fluid={fluid} />
      <h6 className="card-category">{subtitle}</h6>
      <h3 className="card-title">{title}</h3>
    </StyledCard>
  )
}
