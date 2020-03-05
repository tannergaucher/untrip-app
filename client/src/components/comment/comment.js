import { DeleteCommentButton, EditCommentForm } from "."
import React, { useState } from "react"

import { IS_MY_COMMENT } from "../apollo/graphql"
import moment from "moment"
import { useQuery } from "@apollo/react-hooks"

export default function Comment({ comment, post }) {
  const [showEditForm, setShowEditForm] = useState(false)
  const { data } = useQuery(IS_MY_COMMENT, {
    variables: {
      commentAuthorId: comment.author.id,
    },
  })

  return (
    <div className="card" style={{ marginBottom: `var(--space-lg)` }}>
      <div className="card-heading">
        <small style={{ marginRight: `var(--space-md)` }}>
          {comment.author.username}
        </small>
        <small>{moment(comment.createdAt).format("h:mm A D MMMM")}</small>
      </div>
      <br />
      {showEditForm ? (
        <EditCommentForm comment={comment} setShowEditForm={setShowEditForm} />
      ) : (
        <>
          <p className="card-text">{comment.text}</p>
          {comment.createdAt !== comment.updatedAt && (
            <small className="card-text">
              Edited {moment(comment.updatedAt).format("h:mm A D MMMM")}
            </small>
          )}
        </>
      )}
      <div className="padding">
        <hr style={{ width: `100%` }} />
      </div>
      {data && data.isMyComment && (
        <div className="padding">
          <button
            className="btn"
            onClick={() => setShowEditForm(!showEditForm)}
          >
            {showEditForm ? "Back" : "Edit"}
          </button>
          {showEditForm && (
            <DeleteCommentButton comment={comment} post={post} />
          )}
        </div>
      )}
    </div>
  )
}
