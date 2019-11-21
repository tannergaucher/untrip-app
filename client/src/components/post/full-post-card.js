import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { Share } from "../elements"
import { Link } from "../styles"

const StyledFullPostCard = styled.div`
  margin-bottom: var(--space-xl);

  .post-share {
    margin-top: var(--space-md);
  }
`

export default function IndexCard({ post }) {
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
    <StyledFullPostCard>
      <Link to={`/${post.category.slug.current}/${post.slug.current}`} plain>
        <Img fluid={post.mainImage.asset.fluid} />
        <h2 className="post-title responsive-padding">{post.title}</h2>
        <p className="post-excerpt responsive-padding">{excerpt}</p>
      </Link>
      <div className="post-share responsive-padding">
        <Share href={`/${post.category.slug.current}/${post.slug.current}`} />
      </div>
    </StyledFullPostCard>
  )
}
