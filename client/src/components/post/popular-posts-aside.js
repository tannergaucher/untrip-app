import React from "react"

import { AsidePostCard } from "."
import { usePopularSanityPosts } from "../hooks"
import { Link } from "../styles"

export default function PopularPostsAside() {
  const { edges: popularPostEdges } = usePopularSanityPosts()

  return (
    <div className="side-section">
      <h3 className="side-title">Popular</h3>
      {popularPostEdges.map(edge => (
        <Link
          plain="true"
          key={edge.node.id}
          to={`/${edge.node.category.slug.current}/${edge.node.slug.current}`}
        >
          <AsidePostCard key={edge.node.id} post={edge.node} />
        </Link>
      ))}
    </div>
  )
}
