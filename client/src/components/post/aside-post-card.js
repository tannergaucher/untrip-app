import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledAsideCard = styled.div`
  display: flex;
  margin-bottom: var(--space-md);

  .img-wrapper {
    flex: 1;
  }

  .post-details {
    flex: 3;
    padding: 0 var(--space-sm);
  }

  .post-category {
    margin-bottom: var(--space-sm);
  }

  .post-title,
  .post-date,
  .post-category {
    margin: 0;
  }

  .post-title {
    font-weight: 900;
  }
`

export default function AsidePostCard({ post }) {
  return (
    <StyledAsideCard>
      <div className="img-wrapper">
        <Img fluid={post.mainImage.asset.fluid} />
      </div>
      <div className="post-details">
        <small className="post-category">{post.category.category}</small>
        <h4 className="post-title">{post.title}</h4>
      </div>
    </StyledAsideCard>
  )
}
