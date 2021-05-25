import React from 'react'
import BlogCard from "./BlogCard"
import { useStaticQuery, graphql } from 'gatsby'
import styles from './bloglist.module.css'

const getPosts = graphql`
query {
    posts: allContentfulBlogPost
    (limit:3, sort:{fields:publishedDate, order:DESC}){
      edges {
        node {
          title
          author
          description
          publishedDate(formatString: "MMMM Do, YYYY")
          slug
          id: contentful_id
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


const BlogList = () => {
    const{ posts } = useStaticQuery(getPosts)

    return (
        <section className ={styles.listWrapper}>
        <div className = {styles.center}>
            {posts.edges.map(({node}) => {
                return   <BlogCard key = {node.id} blog = {node}/>

            })}
        </div>
         
        </section>
    )
}

export default BlogList
