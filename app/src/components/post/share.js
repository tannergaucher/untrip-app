import React from "react"
import { Box, Button } from "grommet"
import { Facebook, Twitter, Pinterest } from "grommet-icons"

export default function Share() {
  return (
    <Box
      direction="row"
      justify="center"
      margin={{ horizontal: "medium", top: "medium", bottom: "medium" }}
    >
      <Button
        plain={true}
        icon={<Facebook color="dark-1" />}
        margin={{ right: `medium` }}
        href={
          "http://facebook.com/dialog/share?app_id=145634995501895&display=popup"
        }
      />
      <Button
        plain={true}
        icon={<Twitter color="dark-1" />}
        margin={{ right: `medium` }}
        href={"https://twitter.com/intent/tweet"}
      />
      <Button
        plain={true}
        icon={<Pinterest color="dark-1" />}
        href={"http://pinterest.com"}
      />
    </Box>
  )
}
