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
      <Box>
        <Link
          to={`/guide/categories/${sanityPost.category.slug.current}`}
          style={{ color: `inherit`, textDecoration: `none` }}
        >
          <Heading>{sanityPost.category.category}</Heading>
        </Link>
        <Heading>{sanityPost.title}</Heading>
      </Box>
      <Img fluid={sanityPost.mainImage.asset.fluid} />
      <Share post={data.sanityPost} />
      <Box as="article">
        <BlockContent blocks={sanityPost._rawBody} />
        <PostPlaces postPlaces={sanityPost.postPlaces} />
        <Author author={sanityPost.author} />
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
