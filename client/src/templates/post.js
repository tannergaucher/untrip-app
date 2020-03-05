import { AboutSection, Map, SEO, Share } from "../components/elements"
import { Author, LatestPostsAside } from "../components/post"
import { Link, graphql } from "gatsby"
import React, { useState } from "react"

import BlockContent from "@sanity/block-content-to-react"
import { CommentsSection } from "../components/comment"
import Img from "gatsby-image"
import { PostPlaces } from "../components/place"

export default function PostPage({ data }) {
  const [placeInView, setPlaceInView] = useState(null)
  const { sanityPost: post } = data

  return (
    <div className="page">
      <SEO
        title={post.title}
        image={post.mainImage.asset.fluid.src}
        url={`https://untrip.app/posts/${post.category.slug.current}/${post.slug.current}`}
      />
      <div
        className="content-aside-grid"
        style={{ marginBottom: `var(--space-lg)` }}
      >
        <article className="content">
          <div className="padding">
            <Share />
          </div>
          <Img fluid={post.mainImage.asset.fluid} />
          <h1 id="post-title" className="title text--xxxl padding">
            {post.title}
          </h1>
          <div className="padding">
            {/* <h3 className="text--md">{post.publishedAt}</h3> */}

            {post.postPlaces.length > 0 && (
              <>
                <a className="nav-link" href="#map">
                  <h3> View Map</h3>
                </a>
                <br />
              </>
            )}

            <BlockContent blocks={post._rawBody} />
            <hr />
          </div>
          <PostPlaces
            postPlaces={post.postPlaces}
            post={post}
            setPlaceInView={setPlaceInView}
          />
          <br style={{ marginTop: `var(--space-lg)` }} />
          <div className="padding">
            <Author author={post.author} />
          </div>
          <br />
          <CommentsSection post={post} />
        </article>
        <aside className="aside padding">
          <LatestPostsAside />
          <AboutSection />
        </aside>
      </div>

      {post.postPlaces.length > 0 && (
        <PostMap post={post} placeInView={placeInView} />
      )}
    </div>
  )
}

const PostMap = ({ post, placeInView }) => (
  <>
    <div className="padding">
      <hr />
      <h2 id="map" className="title text--xxxl">
        {post.title}
      </h2>
      <a href="#post-title" className="nav-link">
        <h3> View Post</h3>
      </a>
    </div>
    <br />
    <Map places={post.postPlaces} placeInView={placeInView} />
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
