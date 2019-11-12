import React from "react"

import { SEO, About } from "../components/elements"
import { ContentAsideGrid } from "../components/styles"
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
            <FullPostCard key={edge.node.id} post={edge.node} />
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
