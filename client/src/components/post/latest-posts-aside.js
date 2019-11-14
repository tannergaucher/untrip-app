import React from "react"

import { AsidePostCard } from "."
import { Divider, Link } from "../styles"
import { useLatestSanityPosts } from "../hooks"

export default function LatestPostsAside() {
  const { edges: latestPostEdges } = useLatestSanityPosts()

  return (
    <div className="side-section">
      <h2 className="side-title">Latest Posts </h2>
      {latestPostEdges.map(edge => (
        <Link
          key={edge.node.id}
          plain="true"
          to={`/${edge.node.category.slug.current}/${edge.node.slug.current}`}
        >
          <AsidePostCard key={edge.node.id} post={edge.node} />
        </Link>
      ))}
      <Divider />
    </div>
  )
}
