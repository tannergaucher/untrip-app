import { useStaticQuery, graphql } from "gatsby"

export default function useMorePosts() {
  const { allSanityPost } = useStaticQuery(
    graphql`
      query UseMorePosts {
        # limit to five
        # TODO sort by created at
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
