import { useStaticQuery, graphql } from "gatsby"

export default function useAllSanityPopularPost() {
  const { allSanityPopularPost } = useStaticQuery(
    graphql`
      query AllSanityPopularPost {
        allSanityPopularPost {
          edges {
            node {
              popularPost {
                ...SanityPostFragment
              }
            }
          }
        }
      }
    `
  )

  return allSanityPopularPost
}
