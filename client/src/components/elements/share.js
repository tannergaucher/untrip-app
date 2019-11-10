import React from "react"
import styled from "styled-components"

import { LinkButton } from "../styles"

const StyledShare = styled.div`
  margin: 2rem 0;

  .share-btn {
    margin-right: 1rem;
  }

  .facebook {
    color: #3b5998;
  }

  .twitter {
    color: #1da1f2;
  }

  .pinterest {
    color: #c8232c;
  }
`

export default function Share({ fbHref, twitterHref, pinterestHref }) {
  return (
    <StyledShare>
      <LinkButton className="share-btn facebook" href={fbHref}>
        Share
      </LinkButton>
      <LinkButton className="share-btn twitter" href={twitterHref}>
        Tweet
      </LinkButton>
      <LinkButton className="share-btn pinterest" href={pinterestHref}>
        Pin
      </LinkButton>
    </StyledShare>
  )
}
