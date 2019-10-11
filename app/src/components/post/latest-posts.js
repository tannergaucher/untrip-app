import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Card } from "."
import { useAllSanityPost } from "../hooks"

const StyledPosts = styled.div`
  margin: 2rem auto;
  max-width: 1300px;

  .posts-grid {
    display: grid;
    grid-gap: 4rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  @media (max-width: 600px) {
    .posts-grid {
      grid-template-columns: 1fr;
    }
  }
`

export default function Posts() {
  // change hook to useLatestSanityPosts
  const { edges } = useAllSanityPost()

  return (
    <StyledPosts>
      <h2>Latest</h2>
      <div className="posts-grid">
        {edges.map(edge => (
          <Link
            to={`/posts/${edge.node.category.slug.current}/${edge.node.slug.current}`}
            key={edge.node.id}
            style={{ textDecoration: `none`, color: `inherit` }}
          >
            <Card key={edge.node.id} post={edge.node} />
          </Link>
        ))}
      </div>
    </StyledPosts>
  )
}
