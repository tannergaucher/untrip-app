import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledAuthor = styled.div`
  display: flex;
  align-items: center;

  .author-info {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    h5 {
      margin: 0;
    }
  }
`

export default function Author({ author }) {
  return (
    <StyledAuthor>
      <Img fixed={author.image.asset.fixed} style={{ borderRadius: `100%` }} />
      <div className="author-info">
        <h5>{author.name}</h5>
        <a
          href={`${author.social.site.siteUrl}/${author.social.handle}`}
        >{`@${author.social.handle}`}</a>
      </div>
    </StyledAuthor>
  )
}
