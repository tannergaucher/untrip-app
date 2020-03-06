import { AboutSection, SEO } from "../components/elements"
import {
  LatestPostsAside,
  PopularPostsAside,
  PostCard,
} from "../components/post"
import { Link, graphql } from "gatsby"

import React from "react"

export default function PlacePostsPage({ data, pageContext }) {
  return (
    <>
      <SEO title={pageContext.placeName} />
      <div className="content-aside-grid">
        <div className="content padding">
          <h1 className="title">Posts with {pageContext.placeName}</h1>
          {data.allSanityPost.edges.map(edge => (
            <Link
              className="nav-link"
              to={`/${edge.node.category.slug.current}/${edge.node.slug.current}`}
            >
              <PostCard key={edge.node.id} post={edge.node} />
            </Link>
          ))}
          <hr />
        </div>
        <aside className="aside padding">
          <LatestPostsAside />
          <PopularPostsAside />
          <AboutSection />
        </aside>
      </div>
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
