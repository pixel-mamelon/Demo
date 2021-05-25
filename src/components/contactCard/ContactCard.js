import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import contactStyle from './contactCard.module.scss'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
const ContactCard = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulContactCardAddressRichTextNode {
        childContentfulRichText {
          html
        }
      }
    }
  `)
  const htmlContent =
    data.contentfulContactCardAddressRichTextNode.childContentfulRichText.html
  return (
    <div className={contactStyle.wrapper}>
      <div
        className={contactStyle.container}
        dangerouslySetInnerHTML={{
          __html: htmlContent,
        }}
      />
      <div className={contactStyle.socialIcons}>
        <ul>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default ContactCard
