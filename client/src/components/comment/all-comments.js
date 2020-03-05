import { COMMENTS_QUERY } from "../apollo/graphql"
import { Comment } from "."
import React from "react"
import { useQuery } from "@apollo/react-hooks"

export default function AllComments({ post }) {
  const { data, loading, error } = useQuery(COMMENTS_QUERY, {
    variables: {
      sanityPostId: post.id,
    },
  })

  if (loading) return <h2>Loading Comments...</h2>

  if (error) return <h2>{`Error! ${error.message}`}</h2>

  return (
    data &&
    data.comments &&
    data.comments.map(comment => (
      <Comment key={comment.id} comment={comment} post={post} />
    ))
  )
}
