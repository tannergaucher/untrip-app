import React from "react"

import { AsidePostCard } from "."
import { Divider, Link } from "../styles"
import { useLatestSanityPosts } from "../hooks"

export default function LatestPostsAside() {
  // TODO: Make useThisMonth hook.
  const { edges: latestPostEdges } = useLatestSanityPosts()

  return (
    <div className="side-section">
      <h2 className="side-title">This Month</h2>
      {latestPostEdges.map(edge => (
        <Link
          plain
          to={`/${edge.node.category.slug.current}/${edge.node.slug.current}`}
        >
          <AsidePostCard key={edge.node.id} post={edge.node} />
        </Link>
      ))}
      {/* <Divider /> */}
    </div>
  )
}
