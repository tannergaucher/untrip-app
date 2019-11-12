import React from "react"
import styled from "styled-components"

import { LinkButton } from "../styles"

const StyledShare = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;

  .share-btn {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    z-index: 1000;
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

export default function Share({ href, pinterestImageUrl }) {
  const fbBaseUrl = `http://facebook.com/dialog/share?app_id=2159447634360678&display=popup&href=https://untrip.app`
  const twitterBaseUrl = `https://twitter.com/intent/tweet?text=https://untrip.app`
  const pinterestBaseUrl = `https://www.pinterest.com/pin/create/button/?url=https://untrip.app`

  const fb = `${fbBaseUrl}${href && href}`
  const twitter = `${twitterBaseUrl}${href && href}`
  const pinterest = `${pinterestBaseUrl}${href &&
    href}&media=${pinterestImageUrl}`

  return (
    <StyledShare>
      <LinkButton className="share-btn facebook" href={fb} target="_blank">
        Share
      </LinkButton>
      <LinkButton className="share-btn twitter" href={twitter} target="_blank">
        Tweet
      </LinkButton>
      <LinkButton
        className="share-btn pinterest"
        href={pinterest}
        target="_blank"
      >
        Pin
      </LinkButton>
      <LinkButton className="share-btn link">Link</LinkButton>
    </StyledShare>
  )
}
