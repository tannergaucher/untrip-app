import React from "react"
import { Box } from "rebass"
import { Link } from "gatsby"

import { HeroCard } from "../components/styles"
import { SEO } from "../components/elements"

export default function CategoryTag({ data }) {
  return (
    <>
      <SEO title={`${data.tag.tag} Posts`} />
      <Box my={[2]} px={[2]}>
        {data.posts.edges.map(edge => (
          <Link
            to={`/posts/${edge.node.category.slug.current}/${edge.node.slug.current}`}
            key={edge.node.id}
          >
            <HeroCard
              key={edge.node.id}
              text={edge.node.title}
              fluid={edge.node.mainImage.asset.fluid}
            />
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
