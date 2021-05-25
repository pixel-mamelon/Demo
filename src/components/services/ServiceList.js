import React from 'react'
import { Link } from 'gatsby'
import ServiceCard from '../services/ServiceCard'
import styles from './servicelist.module.scss'
import { useStaticQuery, graphql } from 'gatsby'

const ServiceList = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulServices{
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
  const topServices = data.allContentfulServices.edges.slice(0, 6)
  return (
    <>
      <div className="container">
        <div className={styles.headerDiv}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.para}>{description}</p>
        </div>
      </div>
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            flexWrap: 'wrap',
          
            margin: 'auto',
          }}
        >
          {topServices.map(edge => {
            return (
              <Link to={`/services/${edge.node.slug}`}>
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
    </>
  )
}
export default ServiceList
