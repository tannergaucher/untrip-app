import React from "react"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import { graphql, Link } from "gatsby"

import { Heading, Box } from "grommet"

import { PostPlaces, Share, Author } from "../components/post"
import { SEO } from "../components/elements"

export default function PostTemplate({ data }) {
  const { sanityPost } = data

  return (
    <>
      <SEO
        title={data.sanityPost.title}
        image={data.sanityPost.mainImage.asset.fluid.src}
        url={`https://untrip.app/posts/${data.sanityPost.category.slug.current}/${data.sanityPost.slug.current}`}
      />
      <Box margin="medium">
        <Link
          to={`/guide/categories/${sanityPost.category.slug.current}`}
          style={{ color: `inherit`, textDecoration: `none` }}
        >
          <Heading level="6" margin="small" textAlign="center" color="dark-3">
            {sanityPost.category.category}
          </Heading>
        </Link>
        <Heading level="1" margin="small" textAlign="center">
          {sanityPost.title}
        </Heading>
        <Share post={data.sanityPost} />
      </Box>

      <Img fluid={sanityPost.mainImage.asset.fluid} />

      <Box as="article">
        <Box pad="small">
          <BlockContent blocks={sanityPost._rawBody} ser />
          <PostPlaces postPlaces={sanityPost.postPlaces} />
          <Box margin={{ vertical: "large" }}>
            <Author author={sanityPost.author} />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export const POST_PAGE_QUERY = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      ...SanityPostFragment
    }
  }
`
