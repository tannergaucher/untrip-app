import React from "react"

import { AsidePostCard } from "."
import { Link } from "../styles"
import { useLatestSanityPosts } from "../hooks"

export default function LatestPostsAside() {
  const { edges: latestPostEdges } = useLatestSanityPosts()

  return (
    <div className="side-section">
      <h3 className="side-title">Latest </h3>
      {latestPostEdges.map(edge => (
        <Link
          key={edge.node.id}
          plain="true"
          to={`/${edge.node.category.slug.current}/${edge.node.slug.current}`}
        >
          <AsidePostCard key={edge.node.id} post={edge.node} />
        </Link>
      ))}
    </div>
  )
}
