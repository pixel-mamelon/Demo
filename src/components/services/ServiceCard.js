import React from 'react'
import styles from './servicecard.module.scss'

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className={styles.serviceContent}>
      <div className={styles.imageDiv}>
        <img className={styles.serviceImg} src={icon} alt="icon" />
      </div>
      <h1 className={styles.serviceHeading}>{title}</h1>
      <p className={styles.servicePara}>{description}</p>
    </div>
  )
}

export default ServiceCard
