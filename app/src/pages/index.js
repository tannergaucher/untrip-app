import React from "react"
import styled from "styled-components"

import { LatestPosts } from "../components/post"
import { SEO, HeroBanner, NewsletterSignup } from "../components/elements"

const StyledIndexPage = styled.div`
  .latest-posts {
    padding: 1rem;
  }

  .newsletter-signup {
    margin-top: 10rem;
  }
`

const IndexPage = () => (
  <StyledIndexPage>
    <SEO title="Home" />
    <HeroBanner />

    <div className="latest-posts">
      <LatestPosts />
    </div>

    <div className="newsletter-signup">
      <NewsletterSignup />
    </div>
  </StyledIndexPage>
)

export default IndexPage
