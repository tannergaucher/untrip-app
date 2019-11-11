import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  .author-info {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    a {
      text-decoration-color: var(--black);
    }
  }

  .author-name,
  .author-social {
    margin: 0;
  }

  .author-social {
    color: var(--black);
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
