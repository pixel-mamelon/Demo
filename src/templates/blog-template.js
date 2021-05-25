import React from "react"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SectionTitle from "../components/titles/SectionTitle"
import BlogTitle from "../components/titles/BlogTitle"
import { graphql } from "gatsby"
/* import AniLink from "gatsby-plugin-transition-link/AniLink" */
import styles from "./blog-template.module.scss"
import BlogList from "../components/Blog/BlogList"
import ShareButtons from "../components/share-buttons/ShareButtons" 

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title,
      description,
      author,
      publishedDate(formatString: "MMMM Do, YYYY"), 
     body {
        json
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
const Blog = props => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return (
          <div className={styles.imgContainer}>
            <div className={styles.postImg}>
              <img alt={alt} src={url} />
            </div>
          </div>
        )
      },
    },
  }
  return (
    <Layout>
    {/*   <SEO
        title={props.data.contentfulBlogPost.title}
        description={props.data.contentfulBlogPost.description}
      /> */}
    
        <div className="container">
          <BlogTitle
            title={props.data.contentfulBlogPost.title}
            subtitle={props.data.contentfulBlogPost.description}
            author ={props.data.contentfulBlogPost.author}
            publishedDate ={props.data.contentfulBlogPost.publishedDate}
          />
        <ShareButtons 
                  url={`${props.data.site.siteMetadata.siteUrl}${props.path}`}
                  title={props.data.contentfulBlogPost.title}
                  />
        </div>
  
      <div className="container">
        <div className={styles.blogContainer}>
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options,
          )}
          
        </div>
      </div>
 
        <SectionTitle
          title="More news"
          subtitle="Qui cupidatat ipsum dolore velit et irure cillum in dolore. Cillum in dolore qui cupidatat ipsum dolore velit et irure cillum in dolore"
        />
        <div className='blog-wrapper'>
        <BlogList />
      </div>
     
    </Layout>
  )
}

export default Blog

