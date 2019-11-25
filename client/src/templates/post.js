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
import { ContentAsideGrid } from "../components/styles"
import { LatestPostsAside, PopularPostsAside, Author } from "../components/post"

const StyledPost = styled.div``

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
    <StyledPost>
      <SEO
        title={post.title}
        image={post.mainImage.asset.fluid.src}
        url={`https://untrip.app/posts/${post.category.slug.current}/${post.slug.current}`}
      />
      <ContentAsideGrid>
        <article className="content">
          <Img fluid={post.mainImage.asset.fluid} />
          <div className="responsive-padding">
            <h1 className="post-title ">{post.title}</h1>
            {/* <h4 className="post-category">{post.category.category} </h4> */}
            {/* <h4 className="post-date">{post.publishedAt}</h4> */}
            <Share
              href={`/${post.category.slug.current}/${post.slug.current}`}
              pinterestImageUrl={post.mainImage.asset.url}
            />
            <BlockContent blocks={post._rawBody} />
            <Author author={post.author} />
            <br />
            <PostPlaces
              postPlaces={post.postPlaces}
              post={post}
              setPlaceInView={setPlaceInView}
            />
            <Comments
              post={post}
              setCommentsInView={setCommentsInView}
              commentsData={commentsData}
              commentsError={commentsError}
              commentsLoading={commentsLoading}
            />
            <br />
            <br />
          </div>
        </article>
        <aside className="responsive-padding">
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
    </StyledPost>
  )
}

const MapAside = ({ post, placeInView }) => (
  <>
    <h3 className="map-title">{post.title}</h3>
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
