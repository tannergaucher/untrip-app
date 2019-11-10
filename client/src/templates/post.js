import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"

import { PlaceCard } from "../components/place"
import { SEO, Map, Share } from "../components/elements"
import { ContentAsideGrid, Divider } from "../components/styles"
import {
  LatestPostsAside,
  PopularPostsAside,
  Author,
  Comments,
} from "../components/post"

const StyledPost = styled.div`
  .post-title {
    font-weight: 900;
    font-size: 50px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .post-category-date {
    display: flex;
  }

  .post-category,
  .post-date {
    margin: 0;
    text-transform: uppercase;
  }

  .post-category {
    font-weight: lighter;
  }

  .post-date {
    margin-left: 0.5rem;
    font-weight: lighter;
  }

  .post-comments {
    margin-top: 3rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 600px) {
    .post-title {
      font-size: 40px;
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
    }
  }
`

const StyledMap = styled.div`
  .map-title {
  }
`

export default function PostPage({ data }) {
  const [inView, setInView] = useState(null)
  const { sanityPost: post } = data

  return (
    <>
      <SEO
        title={post.title}
        image={post.mainImage.asset.fluid.src}
        url={`https://untrip.app/posts/${post.category.slug.current}/${post.slug.current}`}
      />
      <ContentAsideGrid>
        <article className="content">
          <StyledPost>
            <div className="post-category-date">
              <h6 className="post-category">{post.category.category} /</h6>
              <h6 className="post-date">{post.publishedAt}</h6>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <Share
              fbHref={`http://facebook.com/dialog/share?app_id=2159447634360678&display=popuphref=https://untrip.app/posts/${post.category.slug.current}/${post.slug.current}`}
              twitterHref={`https://twitter.com/intent/tweet?text=https://untrip.app/posts/${post.category.slug.current}/${post.slug.current}`}
              pinterestHref={`https://www.pinterest.com/pin/create/button/?url=https://untrip.app/posts/${post.category.slug.current}/${post.slug.current}&media=${post.mainImage.asset.url}`}
            />
            <Img fluid={post.mainImage.asset.fluid} />
            <BlockContent blocks={post._rawBody} />
            <Author author={post.author} />
            <Divider />
            {post.postPlaces.map(postPlace => (
              <PlaceCard
                key={postPlace.id}
                postPlace={postPlace}
                setInView={setInView}
              />
            ))}

            <div className="post-comments">
              <Comments />
            </div>
          </StyledPost>
        </article>
        <aside>
          <LatestPostsAside />
          <PopularPostsAside />
          <div className="map-container sticky">
            <StyledMap>
              <h2 className="map-title">{post.title}</h2>
              <Map
                places={post.postPlaces}
                inView={inView}
                style={{
                  height: `71vh`,
                  maxWidth: `500px`,
                  marginTop: "5.5rem",
                }}
              />
              <Share />
            </StyledMap>
          </div>
        </aside>
      </ContentAsideGrid>
    </>
  )
}

export const POST_PAGE_QUERY = graphql`
  query($postSlug: String!) {
    sanityPost(slug: { current: { eq: $postSlug } }) {
      ...SanityPostFragment
    }
  }
`
