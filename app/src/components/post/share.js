import React from "react"
import { Box, Anchor } from "grommet"
import { Facebook, Twitter, Pinterest } from "grommet-icons"

export default function Share() {
  return (
    <Box direction="row">
      <Anchor
        icon={<Facebook />}
        label="Share"
        href={
          "http://facebook.com/dialog/share?app_id=145634995501895&display=popup"
        }
      />
      <Anchor
        icon={<Twitter />}
        label={"Tweet"}
        href={"https://twitter.com/intent/tweet"}
      />
      <Anchor icon={<Pinterest />} label="Pin" href={"http://pinterest.com"} />
    </Box>
  )
}
