import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledAsideCard = styled.div`
  display: flex;
  margin-bottom: var(--space-md);

  .img-wrapper {
    flex: 1.5;
  }

  .post-details {
    flex: 3;
    padding: 0 var(--space-sm);
  }

  .post-date {
    margin: 0;
  }

  .post-title {
    margin: 0;
    font-weight: 900;
  }
`

export default function AsidePostCard({ post }) {
  return (
    <StyledAsideCard>
      <div className="img-wrapper">
        <Img
          style={{ boxShadow: `var(--elevation-2)` }}
          fluid={post.mainImage.asset.fluid}
        />
      </div>
      <div className="post-details">
        <h4 className="post-title">{post.title}</h4>
      </div>
    </StyledAsideCard>
  )
}
