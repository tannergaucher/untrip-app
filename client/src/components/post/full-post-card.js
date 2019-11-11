import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { Divider } from "../styles"

const StyledFullPostCard = styled.div`
  margin-bottom: 3rem;

  .post-title {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 900;
    font-size: var(--heading);
  }

  .post-category-date {
    display: flex;
    margin-top: 1.5rem;
  }

  .post-category {
    text-transform: uppercase;
    margin: 0 0.5rem 0 0;
    font-weight: lighter;
  }

  .post-date {
    margin: 0;
    text-transform: uppercase;
    font-weight: lighter;
  }

  @media (max-width: 600px) {
    margin-bottom: 2rem;

    .post-title {
      font-size: 40px;
    }

    .post-excerpt {
      margin-bottom: 0;
    }
  }
`

export default function IndexCard({ post }) {
  // TODO: Check for punctuation at index -1
  const postText = post._rawBody[0].children[0].text
  const textArr = postText.split(" ")
  const maxWordLength = 40

  let excerpt

  if (textArr.length < maxWordLength) {
    excerpt = textArr.join(" ")
  }

  excerpt = `${textArr.slice(0, maxWordLength).join(" ")}...`

  return (
    <StyledFullPostCard>
      <Img fluid={post.mainImage.asset.fluid} />
      <div className="post-category-date">
        <h6 className="post-category">{post.category.category} / </h6>
        <h6 className="post-date">{post.publishedAt}</h6>
      </div>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-excerpt">{excerpt}</p>
      <Divider bgLight={true} />
    </StyledFullPostCard>
  )
}
