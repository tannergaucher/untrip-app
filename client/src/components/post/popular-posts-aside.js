import React from "react"

import { AsidePostCard } from "."
import { usePopularSanityPosts } from "../hooks"
import { Divider } from "../styles"

export default function PopularPostsAside() {
  const { edges: popularPostEdges } = usePopularSanityPosts()

  return (
    <div className="side-section">
      <h2 className="side-title">Popular</h2>
      {popularPostEdges.map(edge => (
        <AsidePostCard key={edge.node.id} post={edge.node} />
      ))}
      <Divider />
    </div>
  )
}
