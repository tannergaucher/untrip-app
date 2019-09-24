import React from "react"
import { Flex, Button } from "rebass"
import { Facebook, Twitter, Pinterest } from "grommet-icons"

export default function Share() {
  return (
    <Flex flexWrap="wrap">
      <a href="http://facebook.com/dialog/share?app_id=145634995501895&display=popup">
        <Button mr={2} bg="var(--light-1)">
          <Facebook size="18px" color="var(--dark-1)" />
        </Button>
      </a>
      <a href="https://twitter.com/intent/tweet">
        <Button mr={2} bg="var(--light-1)">
          <Twitter size="18px" color="var(--dark-1)" />
        </Button>
      </a>
      <a href="http://pinterest.com">
        <Button bg="var(--light-1)">
          <Pinterest size="18px" color="var(--dark-1)" />
        </Button>
      </a>
    </Flex>
  )
}
