import { useStaticQuery, graphql } from "gatsby"

// TODO: LIMIT
export default function useLatestSanityPost() {
  const { allSanityPost } = useStaticQuery(
    graphql`
      query LatestSanityPost {
        allSanityPost(limit: 5) {
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
