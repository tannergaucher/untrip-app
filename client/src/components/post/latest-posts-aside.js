import { AsidePostCard } from "."
import { Link } from "gatsby"
import React from "react"
import { useLatestSanityPosts } from "../hooks"

export default function LatestPostsAside() {
  const { edges: latestPostEdges } = useLatestSanityPosts()

  return (
    <section>
      <h3>Latest </h3>
      <br />
      <div className="column-grid-md">
        {latestPostEdges.map(edge => (
          <Link
            style={{ textDecoration: `none` }}
            key={edge.node.id}
            to={`/${edge.node.category.slug.current}/${edge.node.slug.current}`}
          >
            <AsidePostCard key={edge.node.id} post={edge.node} />
          </Link>
        ))}
      </div>
      <hr />
    </section>
  )
}
