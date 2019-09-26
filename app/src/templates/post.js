import React from "react"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import { Heading, Box, Anchor } from "grommet"
import BlockContent from "@sanity/block-content-to-react"

import { SEO } from "../components/elements"
import { PostPlaces, Share, Author } from "../components/post"

export default function PostTemplate({ data }) {
  const { sanityPost } = data

  return (
    <>
      <SEO
        title={sanityPost.title}
        image={sanityPost.mainImage.asset.fluid.src}
        url={`https://untrip.app/posts/${sanityPost.category.slug.current}/${sanityPost.slug.current}`}
      />
      <Img fluid={sanityPost.mainImage.asset.fluid} />
      <Box margin={{ top: "small" }}>
        <Anchor
          textAlign="center"
          onClick={() => {
            navigate(`/guide/categories/${sanityPost.category.slug.current}`)
          }}
        >
          <Heading textAlign="center" level="4" color="black">
            {sanityPost.category.category}
          </Heading>
        </Anchor>
        <Heading
          level="1"
          margin={{ top: "small" }}
          textAlign="center"
          color="black"
        >
          {sanityPost.title}
        </Heading>
      </Box>
      <Share post={sanityPost} />
      <Box as="article">
        <Box pad="small">
          <BlockContent blocks={sanityPost._rawBody} />
          <PostPlaces postPlaces={sanityPost.postPlaces} />
          <Box margin={{ vertical: "large", horizontal: "medium" }}>
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
