import React, { memo } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "./bloglist-template.module.scss"
import BlogCard from "../components/blog/BlogCard"
import HeroTitleMid from '../components/titles/HeroTitleMid';
import Header from '../components/mainheader/Header';

// import SEO from "../components/SEO"

const BlogList = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  const { data } = props
  return (
    <Layout>
      {/* <SEO title="blog" /> */}
      <Header>
      <div className="container">
				<HeroTitleMid
					title="Our blog"
					subtitle="Qui cupidatat ipsum dolore velit et irure cillum in dolore. Cillum in dolore qui cupidatat ipsum dolore velit et irure cillum in dolore "
				/>
         </div>
			</Header>
        <div className={styles.listWrapper}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.contentful_id} blog={node} />
          })}
        </div>
    
      <section className={styles.links}>
        {!isFirst && (
          <AniLink fade to={prevPage} className={styles.link}>
            Prev
          </AniLink>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <AniLink
            key={`pagination-number${i + 1}`}
            fade
            to={`/blog/${i === 0 ? "" : i + 1}`}
            className={
              i + 1 === currentPage
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`
            }
          >
            {i + 1}
          </AniLink>
        ))}
        {!isLast && (
          <AniLink fade to={nextPage} className={styles.link}>
            Next
          </AniLink>
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int) {
    posts: allContentfulBlogPost(
      skip: $skip
      limit: $limit
      sort: { fields: publishedDate, order: DESC }
    ) {
      edges {
        node {
          title
          author
          description
          slug
         id:contentful_id
          publishedDate(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default BlogList