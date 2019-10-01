import React from "react"
import { Box } from "grommet"
import { Link, graphql } from "gatsby"

import { SEO } from "../components/elements"
import { PostCard } from "../components/post"

export default function CategoryTag({ data }) {
  return (
    <>
      <SEO title={`${data.tag.tag} Posts`} />
      <Box>
        {data.posts.edges.map(edge => (
          <Link
            to={`/posts/${edge.node.category.slug.current}/${edge.node.slug.current}`}
            key={edge.node.id}
            style={{
              textDecoration: "none",
            }}
          >
            <PostCard post={edge.node} />
          </Link>
        ))}
      </Box>
    </>
  )
}

export const CATEGORY_PAGE_QUERY = graphql`
  query($categorySlug: String!, $tagSlug: String!) {
    posts: allSanityPost(
      filter: {
        category: { slug: { current: { eq: $categorySlug } } }
        tags: { elemMatch: { slug: { current: { eq: $tagSlug } } } }
      }
    ) {
      edges {
        node {
          ...SanityPostFragment
        }
      }
    }
    tag: sanityTag(slug: { current: { eq: $tagSlug } }) {
      tag
    }
  }
`
