import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledAuthor = styled.div`
  display: flex;
  align-items: center;
  margin: var(--space-md) 0;

  .author-info {
    display: flex;
    flex-direction: column;
    margin-left: var(--space-sm);

    a {
      text-decoration-color: var(--text-color);
    }
  }

  .author-name,
  .author-social {
    margin: 0;
  }

  .author-social {
    color: var(--text-color);
    font-weight: lighter;
  }
`

export default function Author({ author }) {
  return (
    <StyledAuthor>
      <Img fixed={author.image.asset.fixed} style={{ borderRadius: `100%` }} />
      <div className="author-info">
        <h5 className="author-name">{author.name}</h5>
        <a href={`${author.social.site.siteUrl}/${author.social.handle}`}>
          <h6 className="author-social">{`@${author.social.handle}`}</h6>
        </a>
      </div>
    </StyledAuthor>
  )
}
