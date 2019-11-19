import React from "react"
import { graphql } from "gatsby"

import { SEO, About } from "../components/elements"
import { ContentAsideGrid, Link } from "../components/styles"
import {
  FullPostCard,
  LatestPostsAside,
  PopularPostsAside,
} from "../components/post"

export default function CategoryPage({ data, pageContext }) {
  return (
    <>
      <SEO title={``} />
      <ContentAsideGrid>
        <div className="content">
          {data.allSanityPost.edges.map(edge => (
            <Link
              to={`/${edge.node.category.slug.current}/${edge.node.slug.current}`}
              plain
            >
              <FullPostCard key={edge.node.id} post={edge.node} />
            </Link>
          ))}
        </div>
        <aside>
          <LatestPostsAside />
          <PopularPostsAside />
          <About />
        </aside>
      </ContentAsideGrid>
    </>
  )
}

export const CATEGORY_PAGE_QUERY = graphql`
  query($categorySlug: String!) {
    allSanityPost(
      filter: { category: { slug: { current: { eq: $categorySlug } } } }
    ) {
      edges {
        node {
          ...SanityPostFragment
        }
      }
    }
  }
`
