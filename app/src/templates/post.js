import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"

import { SEO, Map } from "../components/elements"
import { PostPlaces, Author } from "../components/post"
import { Divider } from "../components/styles"

const StyledPost = styled.div`
  .image-wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .category,
  .title {
    text-align: center;
  }

  .post-text-container {
    max-width: var(--container);
    margin: 5rem auto 7rem;
  }

  .map-with-places {
    display: grid;
    grid-template-areas: "places map";
    grid-template-columns: 5fr 3fr;
  }

  .places {
    grid-area: places;
    margin: 0 3rem;
  }

  .map {
    grid-area: map;
    position: sticky;
    top: 15vh;
    height: 70vh;
    margin: 0 3rem;
  }

  .more-posts {
    max-width: var(--max-width);
    margin: 6rem auto;
  }
`

export default function PostTemplate({ data }) {
  const { sanityPost } = data

  console.log(sanityPost)

  return (
    <StyledPost>
      <SEO
        title={sanityPost.title}
        image={sanityPost.mainImage.asset.fluid.src}
        url={`https://untrip.app/posts/${sanityPost.category.slug.current}/${sanityPost.slug.current}`}
      />
      <div className="image-wrapper">
        <h1 className="title">{sanityPost.title}</h1>
        <Img fluid={sanityPost.mainImage.asset.fluid} />
      </div>
      <div className="post-text-container">
        <BlockContent className="post-body" blocks={sanityPost._rawBody} />
        <Author author={sanityPost.author} />
        <Divider />
      </div>
      <div className="map-with-places">
        <div className="places">
          <PostPlaces postPlaces={sanityPost.postPlaces} />
        </div>
        <div className="map">
          <h5>{sanityPost.title}</h5>
          <Map places={sanityPost.postPlaces} />
        </div>
      </div>
      <div className="more-posts">
        <h2>More Posts</h2>
        <br />
      </div>
    </StyledPost>
  )
}

export const POST_PAGE_QUERY = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      ...SanityPostFragment
    }
  }
`
