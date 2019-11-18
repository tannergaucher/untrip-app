import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"
import moment from "moment"

import { Button, Divider } from "../styles"
import { AddComment } from "."
import { COMMENTS_QUERY } from "../apollo/graphql"

const StyledComments = styled.div`
  margin-top: 1rem;
`

export default function Comments({
  setCommentsInView,
  post,
  commentsData,
  commentsError,
  commentsLoading,
}) {
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
        disabled={commentsLoading}
        className="toggle-comments-btn"
        onClick={() => setShow(!show)}
      >
        {commentsData && commentsData.comments
          ? `${
              commentsData.comments.length === 1
                ? "1 comment"
                : `${commentsData.comments.length} Comments`
            }`
          : "Comments"}
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
    <div style={{ marginTop: `2rem` }}>
      {loading && `loading comments`}
      {error && `Error! ${error.message}`}
      {data &&
        data.comments &&
        data.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
    </div>
  )
}

const StyledComment = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: var(--radius);

  .comment-author {
    margin: 0;
    margin-bottom: 1rem;
    font-weight: 300;
  }

  .comment-date {
    margin: 0;
    font-weight: 300;
  }

  .comment-info {
    margin-bottom: 2rem;
  }

  .comment-text {
    font-style: italic;
    margin-bottom: 1rem;
    font-weight: 900;
  }
`

function Comment({ comment }) {
  return (
    <StyledComment>
      <div className="comment-info">
        <h5 className="comment-author">{comment.author.username}</h5>
        <h5 className="comment-date">
          {moment(comment.createdAt).format("D MMMM h:mm A")}
        </h5>
      </div>
      <p className="comment-text">{comment.text}</p>
      <Divider />
    </StyledComment>
  )
}
