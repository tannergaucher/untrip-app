import React from "react"

import { SEO, About } from "../components/elements"
import { Link, ContentAsideGrid } from "../components/styles"
import { useLatestSanityPosts } from "../components/hooks"
import {
  FullPostCard,
  PopularPostsAside,
  ThisMonthAside,
} from "../components/post"

export default function IndexPage() {
  const { edges: latestPostEdges } = useLatestSanityPosts()

  return (
    <>
      <SEO title="Home" />
      <ContentAsideGrid>
        <article className="content">
          {latestPostEdges.map(edge => (
            <Link
              plain
              to={`/${edge.node.category.slug.current}/${edge.node.slug.current}`}
            >
              <FullPostCard key={edge.node.id} post={edge.node} />
            </Link>
          ))}
        </article>
        <aside>
          <ThisMonthAside />
          <PopularPostsAside />
          <div className="sticky">
            <About />
          </div>
        </aside>
      </ContentAsideGrid>
    </>
  )
}
