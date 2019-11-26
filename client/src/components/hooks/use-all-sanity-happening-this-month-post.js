import { useStaticQuery, graphql } from "gatsby"

export default function useAllSanityHappeningThisMonthPost() {
  const { allSanityHappeningThisMonth } = useStaticQuery(
    graphql`
      query allSanityHappeningThisMonth {
        allSanityHappeningThisMonth {
          edges {
            node {
              happeningThisMonth {
                ...SanityPostFragment
              }
            }
          }
        }
      }
    `
  )

  return allSanityHappeningThisMonth
}
