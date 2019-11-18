import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
import { useQuery } from "@apollo/react-hooks"

import { COMMENTS_QUERY } from "../components/apollo/graphql"
import { Comments } from "../components/comment"
import { PostPlaces } from "../components/place"
import { SEO, Map, Share, About } from "../components/elements"
import { ContentAsideGrid, Divider } from "../components/styles"
import { LatestPostsAside, PopularPostsAside, Author } from "../components/post"

const StyledPost = styled.div`
  .post-title {
    font-weight: 900;
    font-size: 50px
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

  .post-date {
    margin-left: 1rem;
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

    .post-comments {
      margin-top: 2rem;
      margin-bottom: 3rem;
    }
  }
`

export default function PostPage({ data }) {
  const [placeInView, setPlaceInView] = useState(null)
  const [commentsInView, setCommentsInView] = useState(null)

  const { sanityPost: post } = data

  const {
    data: commentsData,
    loading: commentsLoading,
    error: commentsError,
  } = useQuery(COMMENTS_QUERY, {
    variables: {
      sanityPostId: post.id,
    },
  })

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
              <h6 className="post-category">{post.category.category} </h6>
              <h6 className="post-date">{post.publishedAt}</h6>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <Share
              href={`/${post.category.slug.current}/${post.slug.current}`}
              pinterestImageUrl={post.mainImage.asset.url}
            />
            <Img fluid={post.mainImage.asset.fluid} />
            <BlockContent blocks={post._rawBody} />
            <Author author={post.author} />
            <Divider bgLight={true} />
            <PostPlaces
              postPlaces={post.postPlaces}
              post={post}
              setPlaceInView={setPlaceInView}
            />
            <div className="post-comments">
              <Comments
                post={post}
                setCommentsInView={setCommentsInView}
                commentsData={commentsData}
                commentsError={commentsError}
                commentsLoading={commentsLoading}
              />
            </div>
          </StyledPost>
        </article>
        <aside>
          <LatestPostsAside />
          <PopularPostsAside />
          <div className="only-mobile">
            <About />
          </div>
          <div className="sticky">
            {commentsInView ? (
              <About />
            ) : (
              <div className="map-container">
                <MapAside post={post} placeInView={placeInView} />
              </div>
            )}
          </div>
        </aside>
      </ContentAsideGrid>
    </>
  )
}

const MapAside = ({ post, placeInView }) => (
  <>
    <h2 className="map-title">{post.title}</h2>
    <Map
      places={post.postPlaces}
      placeInView={placeInView}
      style={{
        height: `71vh`,
        maxWidth: `500px`,
        marginTop: "5.5rem",
      }}
    />
    <Share
      href={`/${post.category.slug.current}/${post.slug.current}`}
      pinterestImageUrl={post.mainImage.asset.url}
    />
  </>
)

export const POST_PAGE_QUERY = graphql`
  query($postSlug: String!) {
    sanityPost(slug: { current: { eq: $postSlug } }) {
      ...SanityPostFragment
    }
  }
`
