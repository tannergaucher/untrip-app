import { useStaticQuery, graphql } from "gatsby"

export default function useAllFoodAndDrinkPosts() {
  const { allSanityPost } = useStaticQuery(
    graphql`
      query AllFoodAndDrinkPosts {
        allSanityPost(
          filter: { category: { slug: { current: { eq: "food-and-drink" } } } }
        ) {
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
