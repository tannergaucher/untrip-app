import React from "react"

import { Divider } from "../styles"
import { useLatestSanityPosts } from "../hooks"
import { AsidePostCard } from "."

export default function LatestPostsAside() {
  const { edges: latestPostEdges } = useLatestSanityPosts()

  return (
    <div className="side-section">
      <h2 className="side-title">Latest Posts </h2>
      {latestPostEdges.map(edge => (
        <AsidePostCard key={edge.node.id} post={edge.node} />
      ))}
      <Divider />
    </div>
  )
}
