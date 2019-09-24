const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all posts.
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

  // Query all categories.
  const categoriesQuery = await graphql(`
    query {
      allSanityCategory {
        edges {
          node {
            slug {
              current
            }
            category
          }
        }
      }
    }
  `)

  const posts = postsQuery.data.allSanityPost.edges || []
  const categories = categoriesQuery.data.allSanityCategory.edges || []
  const categoriesWithTags = []

  // Make a new data structure that holds tags of posts for each category.
  categories.forEach(category => {
    categoriesWithTags.push({
      ...category.node,
      // Change name to tagSlugs
      tags: [],
    })
  })

  posts.forEach(post => {
    categoriesWithTags.forEach(categoryWithTags => {
      if (post.node.category.slug.current === categoryWithTags.slug.current) {
        post.node.tags.map(tag => {
          if (categoryWithTags.tags.indexOf(tag === -1)) {
            categoryWithTags.tags.push(tag.slug.current)
          }
        })
      }
    })
  })

  // Create page for each post.
  posts.forEach(edge => {
    createPage({
      path: `/posts/${edge.node.category.slug.current}/${edge.node.slug.current}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })

  // Create page for each category.
  categoriesWithTags.forEach(edge => {
    createPage({
      path: `/guide/categories/${edge.slug.current}`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        category: edge.category,
        categorySlug: edge.slug.current,
        tags: edge.tags,
      },
    })
  })

  // Create page for each category tag with path of /:category/:tag.
  categoriesWithTags.forEach(edge => {
    edge.tags.forEach(tag => {
      createPage({
        path: `/guide/categories/${edge.slug.current}/${tag}`,
        component: path.resolve(`./src/templates/category-tag.js`),
        context: {
          category: edge.category,
          categorySlug: edge.slug.current,
          tagSlug: tag,
        },
      })
    })
  })

  // TODO create page for each place
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    createPage(page)
  }
}
