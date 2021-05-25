import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,

} from 'react-share'

import styles from './sharebuttons.module.scss';

const ShareButtons = ({  url, title, tags }) => {
    console.log( url, title, tags)
    return (
<div className={styles.shareButtonsContainer}>
    <div>
    <h6>Share:</h6>
    </div>
    <div className={styles.shareButtonsWrapper}>
    <FacebookShareButton url={url} className={styles.share} round={true}>
      <FacebookIcon width={35} className={styles.shareIcon} />
    </FacebookShareButton>
 
    <TwitterShareButton url={url} title={title} hashtags={tags} className={styles.share} borderRadius={4}>
      <TwitterIcon width={35} />
    </TwitterShareButton>

    <LinkedinShareButton url={url} className={styles.share} round={true}>
      <LinkedinIcon width={35}/>
    </LinkedinShareButton>

    </div>
  </div>
    )
  
}

export default ShareButtons