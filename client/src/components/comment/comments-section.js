import { AllComments, CreateComment } from "."
import React, { useState } from "react"

import { CURRENT_USER_QUERY } from "../apollo/graphql"
import { Link } from "gatsby"
import { useQuery } from "@apollo/react-hooks"

export default function CommentsSection({ post }) {
  const [showComments, setShowComments] = useState(false)
  const { data } = useQuery(CURRENT_USER_QUERY)

  return (
    <section className="padding">
      <button
        className="btn"
        style={{ width: `100%` }}
        onClick={() => setShowComments(!showComments)}
      >
        {showComments ? "Close comments" : "Comments"}
      </button>
      {showComments && (
        <>
          {data && data.me ? (
            <CreateComment post={post} />
          ) : (
            <Link to="/login">Log in to comment</Link>
          )}
          <AllComments post={post} />
        </>
      )}
    </section>
  )
}
