import React from "react"
import { Button, Text } from "rebass"

import { Tag } from "grommet-icons"

export default function Tags({ tags }) {
  return (
    <>
      {tags.map(tag => (
        <Button key={tag.id} bg="">
          <span>
            <Tag color="var(--dark-1)" />
            <Text color="var(--dark-1)">{tag.tag}</Text>
          </span>
        </Button>
      ))}
    </>
  )
}
