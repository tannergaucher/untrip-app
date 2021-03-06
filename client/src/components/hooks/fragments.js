import { graphql } from "gatsby"

export const SANITY_POST_FRAGMENT = graphql`
  fragment SanityPostFragment on SanityPost {
    id
    _rawBody
    title
    publishedAt(formatString: "D MMMM YYYY")
    slug {
      current
    }
    category {
      ...SanityCategoryFragment
    }
    tags {
      ...SanityTagFragment
    }
    mainImage {
      asset {
        fluid(maxWidth: 1024, maxHeight: 768) {
          ...GatsbySanityImageFluid
        }
        url
      }
    }
    author {
      ...SanityAuthorFragment
    }
    postPlaces {
      _rawText
      place {
        ...SanityPlaceFragment
      }
    }
  }
`

export const SANITY_AUTHOR_FRAGMENT = graphql`
  fragment SanityAuthorFragment on SanityAuthor {
    id
    name
    slug {
      current
    }
    image {
      asset {
        fixed(width: 50, height: 50) {
          ...GatsbySanityImageFixed
        }
      }
    }
    social {
      site {
        siteName
        siteUrl
      }
      handle
    }
  }
`

export const SANITY_TAG_FRAGMENT = graphql`
  fragment SanityTagFragment on SanityTag {
    id
    tag
    slug {
      current
    }
  }
`

export const SANITY_PLACE_FRAGMENT = graphql`
  fragment SanityPlaceFragment on SanityPlace {
    id
    image {
      asset {
        fluid(maxWidth: 1024, maxHeight: 768) {
          ...GatsbySanityImageFluid
        }
        fixed(width: 80, height: 60) {
          ...GatsbySanityImageFixed
        }
        url
      }
    }
    placeType {
      type
    }

    imageCaption
    imageCredit
    imageLink
    name
    slug {
      current
    }
    facebookLink
    instagramLink
    twitterLink
    websiteLink
    phoneNumber
    location {
      lat
      lng
    }
    tags {
      ...SanityTagFragment
    }
  }
`

export const SANITY_CATEGORY_FRAGMENT = graphql`
  fragment SanityCategoryFragment on SanityCategory {
    id
    category
    slug {
      current
    }
  }
`
