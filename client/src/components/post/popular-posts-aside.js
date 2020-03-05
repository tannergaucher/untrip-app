import { AsidePostCard } from "."
import { Link } from "gatsby"
import React from "react"
import { useAllSanityPopularPost } from "../hooks"

export default function PopularPostsAside() {
  const { edges } = useAllSanityPopularPost()

  return (
    <section>
      <h3>Popular</h3>
      <br />
      <div className="column-grid-md">
        {edges[0].node.popularPost.map(post => {
          return (
            <Link
              style={{ textDecoration: `none` }}
              key={post.id}
              to={`/${post.category.slug.current}/${post.slug.current}`}
            >
              <AsidePostCard key={post.id} post={post} />
            </Link>
          )
        })}
      </div>
      <hr />
    </section>
  )
}
