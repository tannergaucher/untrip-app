import { useStaticQuery, graphql } from "gatsby"

export default function useAllSanityPlace() {
  const { allSanityPlace } = useStaticQuery(
    graphql`
      query AllSanityPlace {
        allSanityPlace {
          edges {
            node {
              ...SanityPlaceFragment
            }
          }
        }
      }
    `
  )

  return allSanityPlace
}
