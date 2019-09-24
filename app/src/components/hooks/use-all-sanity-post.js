import { useStaticQuery, graphql } from "gatsby"

export default function useAllSanityPost() {
  const { allSanityPost } = useStaticQuery(
    graphql`
      query AllSanityPost {
        allSanityPost {
          edges {
            node {
              ...SanityPostFragment
            }
          }
        }
      }
    `
  )

  return allSanityPost
}
