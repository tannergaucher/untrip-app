import React from "react"
import { Box, Button } from "grommet"
import { FacebookOption, Twitter, Pinterest } from "grommet-icons"

export default function Share({ post }) {
  return (
    <Box
      direction="row"
      justify="center"
      margin={{ horizontal: "medium", top: "medium", bottom: "medium" }}
    >
      <Button
        plain={true}
        icon={<FacebookOption color="black" />}
        margin={{ right: `medium` }}
        href={`http://facebook.com/dialog/share?app_id=2159447634360678&display=popup&href=https://untrip.app/posts/${post.category.slug.current}/${post.slug.current}`}
      />
      <Button
        plain={true}
        icon={<Twitter color="black" />}
        margin={{ right: `medium` }}
        href={`https://twitter.com/intent/tweet?text=https://untrip.app/posts/${post.category.slug.current}/${post.slug.current}`}
      />
      <a
        href={`https://www.pinterest.com/pin/create/button/?url=https://untrip.app/posts/${post.category.slug.current}/${post.slug.current}&media=${post.mainImage.asset.url}`}
        data-pin-do="buttonBookmark"
      >
        <Pinterest color="black" />
      </a>
    </Box>
  )
}
