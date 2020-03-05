import React from "react"
import { SEO } from "../components/elements"

const NotFoundPage = () => (
  <div className="page padding container">
    <SEO title="404: Not found" />
    <h1 className="title text--xxxl">NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
