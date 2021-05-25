import React from 'react'
import Layout from '../../components/layout'
import HeroTitleMid from '../../components/titles/HeroTitleMid'
import Header from '../../components/mainheader/Header'
import SectionTitle from '../../components/titles/SectionTitle'
import TeamMember from '../../components/team-members/TeamMember'
import styles from './about.module.scss'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../../components/seo'
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const subtitle =
  'Qui cupidatat ipsum dolore velit et irure cillum in dolore. Cillum in dolore qui cupidatat ipsum dolore velit et irure cillum'
const about = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <Layout>
      <SEO title="About" description={subtitle} />
      <Header>
        <div className="container">
          <HeroTitleMid title="About us" subtitle={subtitle} />
        </div>
      </Header>
      <div className="container">
        <section className={styles.about}>
          <div className={styles.imgContainer}>
            <div className={styles.aboutImg}>
              <Img fluid={aboutImage.childImageSharp.fluid} alt="team" />
            </div>
          </div>
          <div className={styles.aboutText}>
            <p>
              Laboris aute aute laboris do nostrud consequat cillum dolore
              labore. Anim enim labore consectetur ex est exercitation ex anim
              adipisicing reprehenderit id commodo est enim. Tempor laborum
              aliqua esse enim eu nulla consequat exercitation velit velit. Anim
              proident culpa nostrud Lorem cillum Laboris aute aute laboris do
              nostrud consequat cillum dolore labore. Anim enim labore
              consectetur ex est exercitation ex anim adipisicing reprehenderit
              id commodo est enim. Tempor laborum aliqua esse enim eu nulla
              consequat exercitation velit velit. Anim proident culpa nostrud
              Lorem cil voluptate cillum laborum occaecat consequat fugiat qui.
            </p>
            <p>
							Laboris aute aute laboris do nostrud consequat cillum dolore labore. Anim enim labore
							consectetur ex est exercitation ex anim adipisicing reprehenderit id commodo est enim.
							Tempor laborum aliqua esse enim eu nulla consequat exercitation velit velit. Anim proident
							culpa nostrud Lorem cillum Laboris aute aute laboris do nostrud consequat cillum dolore
						
						</p>
          </div>
        </section>
      </div>
      <div className={styles.teamWrapper}>
        <div className="container">
          <SectionTitle
            title="Meet our team"
            subtitle=" Qui cupidatat ipsum dolore velit et irure cillum in dolore. Cillum in dolore qui cupidatat ipsum dolore velit et irure cillum in dolore "
          />

          <div className={styles.sectionWrap}>
            <TeamMember
              name="G.I. Jane"
              title="Javascript Developer"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consecte. Neque aliquam aliquid porro!"
              src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w"
            />
            <TeamMember
              name="Jack Smith"
              title="UX/UI designer"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consecte. Neque aliquam aliquid porro!"
              src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
            />
            <TeamMember
              name="Mark Wahlberg"
              title="Web developer"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consecte. Neque aliquam aliquid porro!"
              src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-3.png"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default about
