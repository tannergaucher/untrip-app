const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all posts
  const postsQuery = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            id
            title
            slug {
              current
            }
            category {
              slug {
                current
              }
            }
            tags {
              tag
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)

  const posts = postsQuery.data.allSanityPost.edges || []

  // Create page for each post.
  posts.forEach(edge => {
    createPage({
      path: `/${edge.node.category.slug.current}/${edge.node.slug.current}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        postSlug: edge.node.slug.current,
      },
    })
  })

  // Query all categories.
  const categoriesQuery = await graphql(`
    query {
      allSanityCategory {
        edges {
          node {
            category
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const categories = categoriesQuery.data.allSanityCategory.edges || []

  // Create category page for each category
  categories.forEach(edge => {
    createPage({
      path: `/${edge.node.slug.current}`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        categorySlug: edge.node.slug.current,
        category: edge.node.category,
      },
    })
  })

  // Query all places
  const placesQuery = await graphql(`
    query {
      allSanityPlace {
        edges {
          node {
            name
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const places = placesQuery.data.allSanityPlace.edges || []

  // Create a page for each place
  places.forEach(edge => {
    createPage({
      path: `/place/${edge.node.slug.current}`,
      component: path.resolve(`./src/templates/place.js`),
      context: {
        placeSlug: edge.node.slug.current,
        placeName: edge.node.name,
      },
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    createPage(page)
  }
}
