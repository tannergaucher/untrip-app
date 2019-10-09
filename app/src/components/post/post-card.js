import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledCard = styled.div`
  transition-duration: var(--duration);

  .category {
    color: grey;
    margin: 0.5rem 0 0 0;
  }

  .title {
    margin: 0;
  }

  &:hover {
    transform: scale(1.03);
    transition-duration: var(--duration);
  }
`

export default function PostCard({ post }) {
  return (
    <StyledCard>
      {/* QUERY FOR A CARD IMAGE with aspect ration of maxWidth: 400px maxHeight: 300px */}
      <Img fluid={post.mainImage.asset.fluid} />
      <h4 className="category">{post.category.category}</h4>
      <h2 className="title">{post.title}</h2>
    </StyledCard>
  )
}
