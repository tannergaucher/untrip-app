import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useQuery, useMutation } from "@apollo/react-hooks"
import styled from "styled-components"
import moment from "moment"

import { AddComment, DeleteComment } from "."
import { Button, Divider, Textarea, Fieldset, Form } from "../styles"
import {
  COMMENTS_QUERY,
  CURRENT_USER_QUERY,
  IS_MY_COMMENT,
  EDIT_COMMENT_MUTATION,
} from "../apollo/graphql"

const StyledComments = styled.div`
  margin-top: 1rem;
`

export default function Comments({
  setCommentsInView,
  post,
  commentsData,
  commentsLoading,
}) {
  const [show, setShow] = useState(false)
  const [ref, inView] = useInView({
    threshold: 1,
  })

  const { data, loading } = useQuery(CURRENT_USER_QUERY)

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
          : `${commentsLoading ? "Loading Comments" : "No Comments"}`}
      </Button>
      {show && (
        <StyledComments>
          {loading && `Loading comments`}
          {data && data.me ? (
            <AddComment post={post} />
          ) : (
            "Sign in to add a comment"
          )}
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
  margin-bottom: 1rem;
  padding: 1rem 0.5rem;
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
  const [edit, setEdit] = useState(false)
  const [editedText, setEditedText] = useState("")

  const { data } = useQuery(IS_MY_COMMENT, {
    variables: {
      commentAuthorId: comment.author.id,
    },
  })

  const [editComment] = useMutation(EDIT_COMMENT_MUTATION, {
    variables: {
      commentId: comment.id,
      text: editedText,
    },
    optimisticResponse: {
      __typename: "Mutation",
      editComment: {
        __typename: "Comment",
        id: comment.id,
        createdAt: comment.createdAt,
        updatedAt: comment.updatedAt,
        text: editedText,
        author: comment.author,
        sanityPostId: comment.sanityPostId,
        claps: comment.claps,
      },
    },
  })

  return (
    <StyledComment>
      <div className="comment-info">
        <h5 className="comment-author">{comment.author.username}</h5>
        <div>
          <h5 className="comment-date">
            {moment(comment.createdAt).format("h:mm A D MMMM")}
          </h5>
          {comment.createdAt !== comment.updatedAt && (
            <h5 className="comment-date">
              Edited: {moment(comment.updatedAt).format("h:mm A D MMMM")}
            </h5>
          )}
        </div>
      </div>
      {edit ? (
        <>
          <Fieldset
            onSubmit={async e => {
              e.preventDefault()
              setEdit(false)
              const res = await editComment()
              console.log(res)
            }}
          >
            <Form>
              <Textarea
                required={true}
                fillMobile
                defaultValue={comment.text}
                onChange={e => setEditedText(e.target.value)}
              />
              <Button
                primary
                fillMobile
                type="submit"
                style={{
                  marginBottom: `2rem`,
                  background: `var(--grey)`,
                }}
              >
                Save
              </Button>
            </Form>
          </Fieldset>
        </>
      ) : (
        <p className="comment-text">{comment.text}</p>
      )}
      {data && data.isMyComment && (
        <>
          <Button
            onClick={() => setEdit(!edit)}
            style={{
              marginRight: `1rem`,
              color: `var(--grey)`,
              borderColor: `grey`,
            }}
          >
            {edit ? "Close" : "Edit"}
          </Button>
          <DeleteComment comment={comment} />
        </>
      )}
      <Divider />
    </StyledComment>
  )
}
