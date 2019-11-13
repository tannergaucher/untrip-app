import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Styled = styled.div`
  display: flex;
  margin: 2rem 0;

  .img-wrapper {
    flex: 1;
  }

  .text {
    flex: 3;
    margin: 0 1rem;
  }

  .post-title,
  .post-category {
    margin: 0;
  }

  .post-title {
    margin-top: 0.5rem;
    font-weight: 900;
  }

  .post-category {
    text-transform: uppercase;
  }
`

export default function AsidePostCard({ post }) {
  return (
    <Styled>
      <div className="img-wrapper">
        <Img fluid={post.mainImage.asset.fluid} />
      </div>
      <div className="text">
        <h6 className="post-category">{post.category.category}</h6>
        <h4 className="post-title">{post.title}</h4>
      </div>
    </Styled>
  )
}
