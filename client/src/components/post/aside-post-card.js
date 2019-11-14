import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Styled = styled.div`
  display: flex;
  margin: 2rem 0;

  .img-wrapper {
    flex: 1;
  }

  .post-details {
    flex: 3;
    margin: 0 1rem;
  }

  .post-title,
  .post-date,
  .post-category {
    margin: 0;
  }

  .post-title {
    margin-top: 0.5rem;
    font-weight: 900;
  }

  .post-category,
  .post-date {
    text-transform: uppercase;
  }

  .post-date {
    margin-top: 0.5rem;
  }
`

export default function AsidePostCard({ post }) {
  return (
    <Styled>
      <div className="img-wrapper">
        <Img fluid={post.mainImage.asset.fluid} />
      </div>
      <div className="post-details">
        <h6 className="post-category">{post.category.category}</h6>
        <h4 className="post-title">{post.title}</h4>
        {/* <h6 className="post-date">{post.publishedAt}</h6> */}
      </div>
    </Styled>
  )
}
