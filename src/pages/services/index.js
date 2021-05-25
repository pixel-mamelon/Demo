import React from 'react'
import ServiceCard from '../../components/services/ServiceCard'
import Layout from '../../components/layout/index'
import styles from './services.module.scss'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import Header from '../../components/mainheader/Header'
import HeroTitleLeft from '../../components/titles/HeroTitleLeft'
import SEO from '../../components/seo'

const ServicePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulServices {
        edges {
          node {
            image {
              file {
                url
              }
            }
            title
            description
            slug
          
          }
        }
      }
    }
  `)

  const subtitle =
    'Qui cupidatat ipsum dolore velit et irure cillum in dolore. Cillum in dolore qui cupidatat ipsum dolore velit et irure cillum in dolore '
  return (
    <Layout>
      <SEO title="Services" description={subtitle} />
      <Header>
        <div className="container">
          <div >
            <HeroTitleLeft title="Our services" subtitle={subtitle} />
          </div>
        </div>
      </Header>
      <div className="container">
        <div className={styles.wrapper}>
          {data.allContentfulServices.edges.map(edge => {
            return (
              <Link
                className={styles.links}
                to={`/services/${edge.node.slug}`}
              >
                <ServiceCard
                  icon={edge.node.image.file.url}
                  title={edge.node.title}
                  description={edge.node.description}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default ServicePage
