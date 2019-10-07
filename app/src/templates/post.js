import React from "react"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import { Heading, Box, Anchor } from "grommet"
import BlockContent from "@sanity/block-content-to-react"

import { SEO, EmailSignup } from "../components/elements"
import { PostPlaces, Share, Author, MorePosts } from "../components/post"
import { PlainHeader } from "../components/elements/header"

export default function PostTemplate({ data }) {
  const { sanityPost } = data

  return (
    <Box style={{ position: "relative" }}>
      <SEO
        title={sanityPost.title}
        image={sanityPost.mainImage.asset.fluid.src}
        url={`https://untrip.app/posts/${sanityPost.category.slug.current}/${sanityPost.slug.current}`}
      />
      <Box
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          zIndex: "3",
        }}
      >
        <PlainHeader light />
      </Box>
      <Img
        fluid={sanityPost.mainImage.asset.fluid}
        style={{ filter: `brightness(.8)` }}
      />
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
      <EmailSignup />
      <MorePosts />
    </Box>
  )
}

export const POST_PAGE_QUERY = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      ...SanityPostFragment
    }
  }
`
