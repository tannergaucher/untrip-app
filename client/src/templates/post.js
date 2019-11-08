import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"

import { SEO, Map, NewsletterSignup } from "../components/elements"
import { ContentAsideGrid, Button, Divider } from "../components/styles"
import { LatestPostsAside, PopularPostsAside, Author } from "../components/post"
import { PlaceCard } from "../components/place"

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
    color: var(--accent);
  }

  .post-date {
    margin-left: 0.5rem;
  }

  .share-btns {
    margin-bottom: 2rem;

    button {
      margin-right: 1rem;
    }
  }

  .fb-btn {
    &:hover {
      background: #0000ff;
    }
  }

  .twitter-btn {
    &:hover {
      background: #1da1f2;
    }
  }

  .pinterest-btn {
    &:hover {
      background: #c8232c;
    }
  }
`

export default function PostTemplate({ data }) {
  const [inView, setInView] = useState(null)

  const { sanityPost: post } = data

  console.log(post)

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
            <div className="share-btns">
              <Button className="fb-btn">Share</Button>
              <Button className="twitter-btn">Tweet</Button>
              <Button className="pinterest-btn">Pin</Button>
            </div>
            <Img fluid={post.mainImage.asset.fluid} />
            <BlockContent blocks={post._rawBody} />
            <Author author={post.author} />
            <Divider />
            {post.postPlaces.map(postPlace => (
              <PlaceCard
                postPlace={postPlace}
                key={postPlace.id}
                setInView={setInView}
              />
            ))}
          </StyledPost>
          <NewsletterSignup />
          {/* COMMENTS */}
        </article>
        <aside>
          <LatestPostsAside />
          <PopularPostsAside />

          <div className="map-container sticky">
            <h2>{post.title}</h2>
            <Map
              places={post.postPlaces}
              inView={inView}
              style={{ height: `70vh`, maxWidth: `500px` }}
            />
            <Divider />
          </div>
        </aside>
      </ContentAsideGrid>
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
