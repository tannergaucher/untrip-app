import { AboutSection, SEO } from "../components/elements"
import {
  LatestPostsAside,
  PopularPostsAside,
  PostCard,
} from "../components/post"
import { Link, graphql } from "gatsby"

import React from "react"

export default function CategoryPage({ data, pageContext }) {
  return (
    <div className="page padding contaienr">
      <SEO title={pageContext.category} />
      <div className="content-aside-grid">
        <div className="content">
          {data.allSanityPost.edges.map(edge => (
            <Link
              plain
              key={edge.node.id}
              to={`/${edge.node.category.slug.current}/${edge.node.slug.current}`}
            >
              <PostCard key={edge.node.id} post={edge.node} />
            </Link>
          ))}
        </div>
        <aside className="aside">
          <LatestPostsAside />
          <PopularPostsAside />
          <AboutSection />
        </aside>
      </div>
    </div>
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
