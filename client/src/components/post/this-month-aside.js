import React from "react"

import { AsidePostCard } from "."
import { Link } from "../styles"
import { useAllSanityHappingThisMonthPost } from "../hooks"

export default function HappeningThisMonthAside() {
  const { edges } = useAllSanityHappingThisMonthPost()

  console.log(edges)

  return (
    <div className="side-section">
      <h3 className="side-title">Happening This Month</h3>
      {edges[0].node.happeningThisMonth.map(post => (
        <Link
          plain
          key={post.id}
          to={`/${post.category.slug.current}/${post.slug.current}`}
        >
          <AsidePostCard key={post.id} post={post} />
        </Link>
      ))}
    </div>
  )
}
