import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import HeroTitleMid from '../components/titles/HeroTitleMid'
import Header from '../components/mainheader/Header'
import ServiceList from '../components/services/ServiceList'
import SectionTitle from '../components/titles/SectionTitle'
import SEO from '../components/seo/index'
import styles from './services-template.module.scss'

export const query = graphql`
  query($slug: String) {
    contentfulServices(slug: { eq: $slug }) {
      title
      description
      body {
        json
      }
      
    }
  }
`
const Services = props => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <SEO
        title={props.data.contentfulServices.title}
        description={props.data.contentfulServices.description}
      />
      <Header>
         <div className='container'>
                <HeroTitleMid title={props.data.contentfulServices.title}
            subtitle={props.data.contentfulServices.description}/>
         </div>
          </Header>
    <div className='container'>
      <div className={styles.serviceDescriptionContainer}>
        {documentToReactComponents(
          props.data.contentfulServices.body.json,
          options,
        )}
    
      </div>
      </div>
      <div className="services-wrapper">
      <div className= "container">
        <SectionTitle
          title="More services"
          subtitle=" Qui cupidatat ipsum dolore velit et irure cillum in dolore. Cillum in dolore qui cupidatat ipsum dolore velit et irure cillum in dolore "
        />
        <ServiceList />
        </div>
      </div>
    </Layout>
  )
}

export default Services
