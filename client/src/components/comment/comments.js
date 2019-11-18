import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"

import { Button } from "../styles"
import { AddComment } from "."
import { COMMENTS_QUERY } from "../apollo/graphql"

const StyledComments = styled.div`
  margin-top: 1rem;
`

export default function Comments({ setCommentsInView, post }) {
  const [show, setShow] = useState(false)
  const [ref, inView] = useInView({
    threshold: 1,
  })

  useEffect(() => {
    setCommentsInView(inView)
  }, [inView])

  return (
    <div ref={ref}>
      <Button
        fillMobile
        primary={!show}
        className="toggle-comments-btn"
        onClick={() => setShow(!show)}
      >
        Comments
      </Button>
      {show && (
        <StyledComments>
          <AddComment post={post} />
          <AllComments post={post} />
        </StyledComments>
      )}
    </div>
  )
}

function AllComments({ post }) {
  const { data, loading, error } = useQuery(COMMENTS_QUERY, {
    variables: {
      sanityPostId: post.id,
    },
  })

  return (
    <>
      {loading && `loading comments`}
      {error && `Error!`}
      {data &&
        data.comments &&
        data.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
    </>
  )
}

const StyledComment = styled.div`
  border: 1px solid var(--black);
  margin-top: 1rem;
  padding: 1rem 0.5rem;
  border-radius: var(--radius);

  .comment-text {
    font-size: 16px;
    font-style: italic;
  }
`

function Comment({ comment }) {
  console.log(comment)

  return (
    <StyledComment>
      <p className="comment-text">{comment.text}</p>
      {/* <Button>{comment.claps} claps</Button> */}
    </StyledComment>
  )
}
