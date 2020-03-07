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
            <>
              <h3 style={{ marginTop: `var(--space-md)` }}>
                <Link to="/login" className="nav-link">
                  Log in to comment
                </Link>
              </h3>
            </>
          )}
          <AllComments post={post} />
        </>
      )}
    </section>
  )
}
