import React from "react"
import styled from "styled-components"

import { Divider, Button } from "../styles"
import { Share } from "../elements"

const Styled = styled.div`
  .site-description {
    margin-bottom: 1.5rem;
  }

  .create-account-btn {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
`

export default function About() {
  return (
    <Styled className="sticky">
      <h2 className="side-title">About Untrip</h2>
      <p className="site-description">
        We curate the best food and drink, music, culture and events happening
        in Kuala Lumpur.
      </p>
      <Share />
      <Button className="newsletter-subscribe-btn">
        Subscribe to weekly newsletter
      </Button>
      <Button className="create-account-btn" primary fillMobile>
        Create an Account
      </Button>
      <Divider />
    </Styled>
  )
}
