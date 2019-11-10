import React, { useState } from "react"

import { Button } from "../styles"

export default function Comments() {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button primary fillMobile onClick={() => setShow(!show)}>
        Comments
      </Button>
      {show && (
        <>
          Comments
          <CreateComment />
          {/* <AllComments /> */}
        </>
      )}
    </>
  )
}

function CreateComment() {
  return (
    <form>
      <textarea />
      <Button>Add Comment</Button>
    </form>
  )
}
