import React from "react"
import styled from "styled-components"

import { Facebook, Twitter, Pinterest } from "grommet-icons"

const StyledShare = styled.div`
  display: flex;

  a {
    margin-right: 2rem;
  }
`

export default function Share({ post }) {
  return (
    <StyledShare>
      <a
        href={`http://facebook.com/dialog/share?app_id=2159447634360678&display=popup&href=https://untrip.app/posts/${post.category.slug.current}/${post.slug.current}`}
      >
        <Facebook color="black" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=https://untrip.app/posts/${post.category.slug.current}/${post.slug.current}`}
      >
        <Twitter color="black" />
      </a>

      <a
        href={`https://www.pinterest.com/pin/create/button/?url=https://untrip.app/posts/${post.category.slug.current}/${post.slug.current}&media=${post.mainImage.asset.url}`}
        data-pin-do="buttonBookmark"
      >
        <Pinterest color="black" />
      </a>
    </StyledShare>
  )
}
