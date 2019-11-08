// import React from "react"
// import { graphql } from "gatsby"

// import { SEO } from "../components/elements"
// import { ContentAsideGrid } from "../components/styles"

// export default function CategoryPage() {
//   return (
//     <>
//       <SEO title={`Tags`} />
//       <ContentAsideGrid>
//         <div className="content">Content</div>

//         <aside>Aside</aside>
//       </ContentAsideGrid>
//     </>
//   )
// }

// Query cagegory of slug from page context.
// export const CATEGORY_PAGE_QUERY = graphql`
//   query($categorySlug: Slug!) {
//     allSanityPost(
//       filter: { category: { slug: { current: { eq: $categorySlug } } } }
//     ) {
//       edges {
//         node {
//           title
//           category {
//             category
//           }
//         }
//       }
//     }
//   }
// `
