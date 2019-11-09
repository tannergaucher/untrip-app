import React from "react"

import { SEO, About } from "../components/elements"
import { Link, ContentAsideGrid, Button } from "../components/styles"
import {
  FullPostCard,
  PopularPostsAside,
  ThisMonthAside,
} from "../components/post"

import { useLatestSanityPosts } from "../components/hooks"

export default function IndexPage() {
  const { edges: latestPostEdges } = useLatestSanityPosts()

  return (
    <>
      <SEO title="Home" />
      <ContentAsideGrid>
        <article className="content">
          {latestPostEdges.map(edge => (
            <Link
              to={`/${edge.node.category.slug.current}/${edge.node.slug.current}`}
              plain
            >
              <FullPostCard key={edge.node.id} post={edge.node} />
            </Link>
          ))}
          <Button primary>View More Posts</Button>
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
