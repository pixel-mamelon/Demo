import React from 'react'
import contactStyle from './style.module.scss'
import Layout from '../../components/layout/index'
import Form from '../../components/form/Form'
import ContactCard from '../../components/contactCard/ContactCard'
import HeroTitleMid from '../../components/titles/HeroTitleMid'
import Header from '../../components/mainheader/Header'
import SEO from '../../components/seo'
const subtitle =
  'Qui cupidatat ipsum dolore velit et irure cillum in dolore. Cillum in dolore qui cupidatat ipsum dolore velit et irure cillum in dolore '
const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description={subtitle} />
    <Header>
      <div className="container">
        <HeroTitleMid title="Contact us" subtitle={subtitle} />
      </div>
    </Header>
    <div className={contactStyle.wrapper}>
      <div className={contactStyle.contactContainer}>
        <div>
          <ContactCard />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
