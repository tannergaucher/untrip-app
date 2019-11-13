import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

import { Button } from "../styles"

const StyledComments = styled.div``

export default function Comments({ setCommentsInView }) {
  const [show, setShow] = useState(false)

  const [ref, inView] = useInView({
    threshold: 1,
  })

  useEffect(() => {
    setCommentsInView(inView)
  }, [inView])

  return (
    <StyledComments ref={ref}>
      <Button
        className="toggle-comments-btn"
        primary={!show}
        fillMobile
        onClick={() => setShow(!show)}
      >
        Comments
      </Button>
      {show && (
        <>
          <h2> Coming soon!</h2>
        </>
      )}
    </StyledComments>
  )
}
