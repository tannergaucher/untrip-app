import React from "react"
import { graphql } from "gatsby"

import { SEO, About } from "../components/elements"
import { ContentAsideGrid, Link } from "../components/styles"
import {
  PostCard,
  LatestPostsAside,
  PopularPostsAside,
} from "../components/post"

export default function PlacePage({ data, pageContext }) {
  console.log(pageContext)
  return (
    <>
      <SEO title={pageContext.placeName} />
      <ContentAsideGrid>
        <div className="content">
          <h1>All posts with {pageContext.placeName}</h1>
          {data.allSanityPost.edges.map(edge => (
            <Link
              to={`/${edge.node.category.slug.current}/${edge.node.slug.current}`}
              plain
            >
              <PostCard key={edge.node.id} post={edge.node} />
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

export const PLACE_PAGE_QUERY = graphql`
  query($placeSlug: String!) {
    allSanityPost(
      filter: {
        postPlaces: {
          elemMatch: { place: { slug: { current: { eq: $placeSlug } } } }
        }
      }
    ) {
      edges {
        node {
          ...SanityPostFragment
        }
      }
    }
  }
`
