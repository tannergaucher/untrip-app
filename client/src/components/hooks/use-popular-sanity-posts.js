import { useStaticQuery, graphql } from "gatsby"

// TODO: LIMIT
export default function usePopularSanityPosts() {
  const { allSanityPost } = useStaticQuery(
    graphql`
      query PopularSanityPost {
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
