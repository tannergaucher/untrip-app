import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import { Heading, Box, Flex } from "rebass"

import { PostPlaces, Share, Author } from "../components/post"
import { BlockContent } from "../components/styles"
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
      <Box px={[3]}>
        <Link
          to={`/guide/categories/${sanityPost.category.slug.current}`}
          style={{ color: `inherit`, textDecoration: `none` }}
        >
          <Heading
            mt={[3]}
            fontSize={[2, 3]}
            fontWeight="400"
            textAlign={["", "center"]}
          >
            {sanityPost.category.category}
          </Heading>
        </Link>
        <Heading
          fontSize={[5, 6]}
          mb={[3, 4]}
          mt={[2.3]}
          lineHeight="1.1"
          fontWeight="900"
          textAlign={["", "center"]}
        >
          {sanityPost.title}
        </Heading>
      </Box>
      <Img fluid={sanityPost.mainImage.asset.fluid} />
      <Flex mt={[4]} px={[2]} justifyContent="center">
        <Share post={data.sanityPost} />
      </Flex>
      <Box as="article" mb={[4]} p={[2]}>
        <BlockContent blocks={sanityPost._rawBody} mb={[4]} />
        <PostPlaces postPlaces={sanityPost.postPlaces} />

        <Flex justifyContent="center">
          <Author author={sanityPost.author} />
        </Flex>
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
