import Img from "gatsby-image"
import { Link } from "gatsby"
import React from "react"

export default function PostCard({ post }) {
  const postText = post._rawBody[0].children[0].text
  const textArr = postText.split(" ")
  const maxWordLength = 16

  let excerpt

  if (textArr.length < maxWordLength) {
    excerpt = textArr.join(" ")
  }

  excerpt = `${textArr.slice(0, maxWordLength).join(" ")}...`

  return (
    <div className="card">
      <Link
        to={`/${post.category.slug.current}/${post.slug.current}`}
        className="nav-link"
      >
        <Img
          fluid={post.mainImage.asset.fluid}
          style={{
            borderTopLeftRadius: `var(--radius)`,
            borderTopRightRadius: `var(--radius)`,
          }}
        />
        <br />
        <h2 className="card-heading title">{post.title}</h2>
        <p className="card-text">{excerpt}</p>
      </Link>
      {/* <Share /> */}
    </div>
  )
}
