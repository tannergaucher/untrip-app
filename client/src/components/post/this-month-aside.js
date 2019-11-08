import React from "react"

import { useLatestSanityPosts } from "../hooks"
import { AsidePostCard } from "."
import { Divider, Link } from "../styles"

export default function LatestPostsAside() {
  // TODO: MAKE useTHisMonth hook
  const { edges: latestPostEdges } = useLatestSanityPosts()

  return (
    <div className="side-section">
      <h2 className="side-title">This Month</h2>
      {latestPostEdges.map(edge => (
        <Link
          to={`${edge.node.category.slug.current}/${edge.node.slug.current}`}
          plain
        >
          <AsidePostCard key={edge.node.id} post={edge.node} />
        </Link>
      ))}
      <Divider />
    </div>
  )
}
