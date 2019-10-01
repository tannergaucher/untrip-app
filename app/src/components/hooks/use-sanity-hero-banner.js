import { useStaticQuery, graphql } from "gatsby"

export default function useHeroBanner() {
  const { sanityHeroBanner } = useStaticQuery(
    graphql`
      query SanityHeroBanner {
        sanityHeroBanner {
          ...SanityHeroBannerFragment
        }
      }
    `
  )
  return sanityHeroBanner
}
