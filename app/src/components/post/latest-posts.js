import React from "react"
import { Link } from "gatsby"

import { Card } from "../elements"
import { useAllSanityPost } from "../hooks"
import { StyledCardGrid } from "../styles"

export default function Posts() {
  // TODO change hook to useLatestSanityPosts
  const { edges } = useAllSanityPost()

  return (
    <StyledCardGrid>
      <h2>Latest</h2>
      <div className="card-grid">
        {edges.map(edge => (
          <Link
            to={`/posts/${edge.node.category.slug.current}/${edge.node.slug.current}`}
            key={edge.node.id}
            style={{ textDecoration: `none`, color: `inherit` }}
          >
            <Card
              key={edge.node.id}
              fluid={edge.node.mainImage.asset.fluid}
              subtitle={edge.node.category.category}
              title={edge.node.title}
            />
          </Link>
        ))}
      </div>
    </StyledCardGrid>
  )
}
