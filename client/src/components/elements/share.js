import React from "react"
import styled from "styled-components"

import { LinkButton } from "../styles"

const StyledShare = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;

  .share-btn {
    margin-right: 0.5rem;
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

  .link {
    color: grey;
  }
`

export default function Share({
  fbHref,
  twitterHref,
  pinterestHref,
  linkHref,
}) {
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
      <LinkButton className="share-btn link" href={linkHref}>
        Link
      </LinkButton>
    </StyledShare>
  )
}
