import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useQuery, useMutation } from "@apollo/react-hooks"
import styled from "styled-components"
import { Edit, Redo, Close } from "grommet-icons"
import moment from "moment"

import { AddComment, DeleteComment } from "."
import { Button, Textarea, Fieldset, Form, StyledLayer } from "../styles"
import { AuthTabs } from "../auth"
import {
  COMMENTS_QUERY,
  CURRENT_USER_QUERY,
  IS_MY_COMMENT,
  EDIT_COMMENT_MUTATION,
} from "../apollo/graphql"

const StyledComments = styled.div`
  margin-top: var(--space-md);
`

export default function Comments({
  setCommentsInView,
  post,
  commentsData,
  commentsLoading,
}) {
  const [show, setShow] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)

  const [ref, inView] = useInView({
    threshold: 1,
  })

  const { data, loading } = useQuery(CURRENT_USER_QUERY)

  useEffect(() => {
    setCommentsInView(inView)
  }, [inView, setCommentsInView])

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
            <>
              <>
                <Button primary onClick={() => setShowAuthModal(true)}>
                  Log in to comment
                </Button>
                {showAuthModal && (
                  <StyledLayer
                    onClickOutside={() => setShowAuthModal(false)}
                    onEsc={() => setShowAuthModal(false)}
                  >
                    <Button
                      style={{
                        alignSelf: "flex-end",
                        border: `none`,
                        padding: `var(--space-sm)`,
                      }}
                      onClick={() => setShowAuthModal(false)}
                    >
                      <Close size="var(--text-md)" color="var(--black)" />
                    </Button>
                    <AuthTabs />
                  </StyledLayer>
                )}
              </>
            </>
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
    <div style={{ marginTop: `var(--space-xl)` }}>
      {loading && `loading comments`}
      {error && `Error! ${error.message}`}
      {data &&
        data.comments &&
        data.comments.map(comment => (
          <Comment key={comment.id} comment={comment} post={post} />
        ))}
    </div>
  )
}

const StyledComment = styled.div`
  margin-bottom: var(--space-lg);
  border-radius: var(--radius);
  border: 2px solid var(--grey);
  padding: var(--space-md);

  .comment-author {
    margin-top: 0;
    margin-bottom: var(--space-sm);
    font-weight: bold;
  }

  .comment-date {
    margin: 0;
    font-weight: 300;
    color: var(--grey);
  }

  .comment-info {
    margin-bottom: var(--space-md);
  }

  .comment-text {
    font-weight: 900;
    margin-bottom: 0;
  }

  .edited {
    margin-top: 0;
  }
`

function Comment({ comment, post }) {
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
        <h4 className="comment-author">{comment.author.username}</h4>
        <div>
          <small className="comment-date">
            {moment(comment.createdAt).format("h:mm A D MMMM")}
          </small>
        </div>
      </div>
      {edit ? (
        <>
          <Fieldset
            onSubmit={e => {
              e.preventDefault()
              setEdit(false)
              editComment()
            }}
          >
            <Form>
              <Textarea
                fillMobile
                required={true}
                defaultValue={comment.text}
                onChange={e => setEditedText(e.target.value)}
              />
              <Button
                fillMobile
                type="submit"
                style={{
                  marginBottom: `var(--space-md)`,
                }}
              >
                Save
              </Button>
            </Form>
          </Fieldset>
        </>
      ) : (
        <>
          <p className="comment-text">{comment.text}</p>
          {comment.createdAt !== comment.updatedAt && (
            <h5 className="comment-date edited">
              Edited: {moment(comment.updatedAt).format("h:mm A D MMMM")}
            </h5>
          )}
        </>
      )}
      {data && data.isMyComment && (
        <div style={{ marginTop: `var(--space-md)` }}>
          <Button
            onClick={() => setEdit(!edit)}
            style={{
              marginRight: `var(--space-md)`,
              color: `var(--grey)`,
              border: `none`,
            }}
          >
            {edit ? (
              <Redo size="var(--text-md)" color="var(--grey)" />
            ) : (
              <Edit size="var(--text-md)" color="var(--grey)" />
            )}
          </Button>
          <DeleteComment comment={comment} post={post} />
        </div>
      )}
    </StyledComment>
  )
}
