import { EditListModal } from "."
import Img from "gatsby-image"
import { Link } from "gatsby"
import React from "react"

export default function ListCard({ list }) {
  return (
    <div className="card">
      {list.places.length > 0 && (
        <Img fluid={JSON.parse(list.places[0].imageUrl)} />
      )}
      <br />
      <Link className="nav-link" to={`/app/list/${list.id}`}>
        <h2 className="card-heading title">{list.title}</h2>
      </Link>
      <div className="padding">
        <hr style={{ width: `100%`, marginTop: `var(--space-md)` }} />
        <EditListModal list={list} />
      </div>
    </div>
  )
}
