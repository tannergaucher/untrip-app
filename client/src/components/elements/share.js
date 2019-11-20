import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"

import { LinkButton } from "../styles"

const StyledShare = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: var(--space-md);

  .share-btn {
    margin-right: var(--space-sm);
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
      <LinkButton
        className="share-btn"
        href={fb}
        target="_blank"
        style={{
          color: `var(--facebook)`,
        }}
      >
        Share
      </LinkButton>
      <LinkButton
        className="share-btn"
        href={twitter}
        target="_blank"
        style={{ color: `var(--twitter)` }}
      >
        Tweet
      </LinkButton>
      {/* <LinkButton
        className="share-btn"
        href={pinterest}
        target="_blank"
        style={{ color: `var(--pinterest)` }}
      >
        Pin
      </LinkButton> */}
      <CopyLinkButton href={href} />
    </StyledShare>
  )
}

function CopyLinkButton({ href }) {
  const [copied, setCopied] = useState(false)
  const buttonEl = useRef(null)

  const handleClick = e => {
    if (e.target === buttonEl.current) {
      setCopied(true)
      navigator.clipboard.writeText(`https://untrip.app${href ? href : ""}`)
    } else {
      setCopied(false)
      navigator.clipboard.writeText("")
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [handleClick])

  return (
    <LinkButton
      className="share-btn link"
      ref={buttonEl}
      style={{
        color: copied ? "green" : "",
      }}
    >
      Link
    </LinkButton>
  )
}
