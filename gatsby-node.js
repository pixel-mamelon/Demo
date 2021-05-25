/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const serviceTemplate = path.resolve('./src/templates/services-template.js')
  const res = await graphql(`
    query {
      allContentfulServices {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  res.data.allContentfulServices.edges.forEach(edge => {
    createPage({
      component: serviceTemplate,
      path: `/services/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  const { data } = await graphql(`
query {
    posts: allContentfulBlogPost {
        edges {
            node {
                slug
            }
        }
    }
}

`);
  
	data.posts.edges.forEach(({ node }) => {
		createPage({
			path: `blog/${node.slug}`,
			component: path.resolve('./src/templates/blog-template.js'),
			context: {
				slug: node.slug,
			},
		});
	});

	const posts = data.posts.edges
	const postsPerPage = 3
	const numPages = Math.ceil(posts.length / postsPerPage)
	Array.from({ length: numPages }).forEach((_, i) => {
	  createPage({
		path: i === 0 ? `/blog` : `/blog/${i + 1}`,
		component: path.resolve("./src/templates/blog-list-template.js"),
		context: {
		  limit: postsPerPage,
		  skip: i * postsPerPage,
		  numPages,
		  currentPage: i + 1,
		},
	  })
	})
 /*  const blogTemplate = path.resolve('./src/templates/blog.js')
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  }) */
}
