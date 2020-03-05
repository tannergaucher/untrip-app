import { EmailSignup } from "."
import React from "react"
import { Share } from "../elements"
import { useSiteMetadata } from "../hooks"

export default function AboutSection() {
  const { title, description } = useSiteMetadata()

  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <Share href={"/"} />
      <br />
      <EmailSignup />
      <br />
    </section>
  )
}
