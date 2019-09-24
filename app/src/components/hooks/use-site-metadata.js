import { useStaticQuery, graphql } from "gatsby"

export default function useSiteMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA {
        site {
          siteMetadata {
            title
            description
            author
            social {
              github
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}
