const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all posts.
  // Can I use a fragment inside gatsby-node?
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
  // Make pages for each category.
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    createPage(page)
  }
}
