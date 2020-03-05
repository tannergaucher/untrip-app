import { PopularPostsAside, PostCard, ThisMonthAside } from "../components/post"

import React from "react"
import { SEO } from "../components/elements"
import { useLatestSanityPosts } from "../components/hooks"

export default function IndexPage() {
  const { edges } = useLatestSanityPosts()

  return (
    <>
      <SEO title="Home" />
      <div className="page content-aside-grid padding">
        <div className="content">
          <div className="column-grid-lg">
            {edges.map(edge => (
              <PostCard key={edge.node.id} post={edge.node} />
            ))}
          </div>
          <hr />
        </div>
        <aside className="aside">
          <PopularPostsAside />
          <ThisMonthAside />
        </aside>
      </div>
      <br />
    </>
  )
}
