import React from "react"

export default function Share({ href, pinterestImageUrl }) {
  const fbBaseUrl = `http://facebook.com/dialog/share?app_id=2159447634360678&display=popup&href=https://untrip.app`
  const twitterBaseUrl = `https://twitter.com/intent/tweet?text=https://untrip.app`
  const pinterestBaseUrl = `https://www.pinterest.com/pin/create/button/?url=https://untrip.app`

  const fb = `${fbBaseUrl}${href ? href : ""}`
  const twitter = `${twitterBaseUrl}${href && href}`
  const pinterest = `${pinterestBaseUrl}${href &&
    href}&media=${pinterestImageUrl}`

  return (
    <div>
      <small>Share </small>
      <nav className="nav">
        <a
          className="nav-link"
          href={fb}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Facebook</h4>
        </a>
        <a
          className="nav-link"
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Twitter</h4>
        </a>
        {pinterestImageUrl && (
          <a
            className="nav-link"
            href={pinterest}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4> Pinterest</h4>
          </a>
        )}
      </nav>
    </div>
  )
}
