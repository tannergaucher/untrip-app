import { useStaticQuery, graphql } from "gatsby"

export default function useAllSanityPlace() {
  const { allSanityCategory } = useStaticQuery(
    graphql`
      query AllSanityCategory {
        allSanityCategory {
          edges {
            node {
              ...SanityCategoryFragment
            }
          }
        }
      }
    `
  )
  return allSanityCategory
}
