import React from "react"
import { Link } from "gatsby"

import { HeroCard } from "../styles"
import { useAllSanityCategory } from "../hooks"

export default function Categories() {
  const { edges } = useAllSanityCategory()

  return (
    <>
      {edges.map(edge => (
        <Link
          key={edge.node.id}
          to={`/guide/categories/${edge.node.slug.current}`}
        >
          <HeroCard
            key={edge.node.id}
            text={edge.node.category}
            fluid={edge.node.image.asset.fluid}
          />
        </Link>
      ))}
    </>
  )
}
