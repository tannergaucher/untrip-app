import React from "react"

import { AsidePostCard } from "."
import { Link } from "../styles"
import { useLatestSanityPosts } from "../hooks"

export default function LatestPostsAside() {
  // TODO: Make useThisMonth hook.
  const { edges: latestPostEdges } = useLatestSanityPosts()

  return (
    <div className="side-section">
      <h3 className="side-title">This Month</h3>
      {latestPostEdges.map(edge => (
        <Link
          plain
          to={`/${edge.node.category.slug.current}/${edge.node.slug.current}`}
        >
          <AsidePostCard key={edge.node.id} post={edge.node} />
        </Link>
      ))}
    </div>
  )
}
