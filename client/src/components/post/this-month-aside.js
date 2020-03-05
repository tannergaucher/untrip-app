import { AsidePostCard } from "."
import { Link } from "gatsby"
import React from "react"
import { useAllSanityHappingThisMonthPost } from "../hooks"

export default function HappeningThisMonthAside() {
  const { edges } = useAllSanityHappingThisMonthPost()

  return (
    <section>
      <h3>This Month</h3>
      <br />
      <div className="column-grid-md">
        {edges[0].node.happeningThisMonth.map(post => (
          <Link
            style={{ textDecoration: `none` }}
            key={post.id}
            to={`/${post.category.slug.current}/${post.slug.current}`}
          >
            <AsidePostCard key={post.id} post={post} />
          </Link>
        ))}
      </div>
      <hr />
    </section>
  )
}
