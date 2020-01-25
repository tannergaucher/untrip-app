import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { Share } from "../elements"
import { Link } from "../styles"

const StyledPostCard = styled.div`
  margin-bottom: var(--space-xl);

  .post-share {
    margin-top: var(--space-md);
  }
`

export default function PostCard({ post }) {
  const postText = post._rawBody[0].children[0].text
  const textArr = postText.split(" ")
  const maxWordLength = 30

  let excerpt

  if (textArr.length < maxWordLength) {
    excerpt = textArr.join(" ")
  }

  // TODO: Check for existing punctuation at index -1
  excerpt = `${textArr.slice(0, maxWordLength).join(" ")}...`

  return (
    <StyledPostCard>
      <Link to={`/${post.category.slug.current}/${post.slug.current}`} plain>
        <Img
          style={{ boxShadow: `var(--elevation-2)` }}
          fluid={post.mainImage.asset.fluid}
        />
        <h3 className="post-title responsive-padding">{post.title}</h3>
        <p className="post-excerpt responsive-padding">{excerpt}</p>
      </Link>
      <div className="post-share responsive-padding">
        <Share
          href={`/${post.category.slug.current}/${post.slug.current}`}
          pinterestImageUrl={post.mainImage.asset.url}
        />
      </div>
    </StyledPostCard>
  )
}
