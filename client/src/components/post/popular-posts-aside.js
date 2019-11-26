import React from "react"

import { Link } from "../styles"
import { AsidePostCard } from "."
import { useAllSanityPopularPost } from "../hooks"

export default function PopularPostsAside() {
  const { edges } = useAllSanityPopularPost()

  return (
    <div className="side-section">
      <h3 className="side-title">Popular</h3>

      {edges[0].node.popularPost.map(post => {
        return (
          <Link
            plain="true"
            key={post.id}
            to={`/${post.category.slug.current}/${post.slug.current}`}
          >
            <AsidePostCard key={post.id} post={post} />
          </Link>
        )
      })}
    </div>
  )
}
