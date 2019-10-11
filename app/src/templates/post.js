import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"

import { SEO, Map, NewsletterSignup } from "../components/elements"
import { PostPlaces, Author, Share, LatestPosts } from "../components/post"
import { Divider } from "../components/styles"

const StyledPost = styled.div`
  .image-wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .title {
    text-align: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    /* font-weight: 900; */
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

    .map-title {
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }

  .latest-posts {
    margin: 10rem 0.5rem;
  }

  @media (max-width: 600px) {
    .title {
      text-align: left;
    }

    .post-text-container {
      margin: 2rem 0.5rem 3rem;
    }

    .map-with-places {
      display: grid;
      grid-template-areas:
        "places"
        "map";
      grid-template-rows: auto auto;
      grid-template-columns: 1fr;
    }

    .places {
      margin: 0 0.5rem;
    }

    .map {
      margin: 0;
      width: 100vw;
      height: 100vh;

      .map-title {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        margin-top: 0;
        margin-bottom: 1rem;
        text-align: center;
      }
    }

    .latest-posts {
      margin: 7rem 0.5rem;
    }
  }
`

export default function PostTemplate({ data }) {
  const [inView, setInView] = useState(null)

  const { sanityPost } = data

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
        <Share post={sanityPost} />
        <BlockContent className="post-body" blocks={sanityPost._rawBody} />
        <Author author={sanityPost.author} />
        <Divider />
      </div>
      <div className="map-with-places">
        <div className="places">
          <PostPlaces
            postPlaces={sanityPost.postPlaces}
            setInView={setInView}
          />
        </div>
        <div className="map">
          <h3 className="map-title">{sanityPost.title}</h3>
          <Map places={sanityPost.postPlaces} inView={inView} />
        </div>
      </div>

      <div className="latest-posts">
        <LatestPosts />
      </div>
      <div>
        <NewsletterSignup />
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
