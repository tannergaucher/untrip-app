import Img from "gatsby-image"
import React from "react"

export default function AsidePostCard({ post }) {
  return (
    <div className="card">
      <Img
        fluid={post.mainImage.asset.fluid}
        style={{
          borderTopLeftRadius: `var(--radius)`,
          borderTopRightRadius: `var(--radius)`,
        }}
      />
      <h4 className="card-heading title">{post.title}</h4>
    </div>
  )
}
