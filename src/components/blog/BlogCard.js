import React from 'react';
import styles from './blogcard.module.css';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const BlogCard = ({ blog }) => {
	const { slug, title, image, author, description, publishedDate } = blog;
	return (
		<article className={styles.card}>
			<div className={styles.imgContainer}>
				<Image fluid={image.fluid} className={styles.image} alt="single post" />
			</div>

			<div className={styles.info}>
				<h2>{title}</h2>
				<h6>
					<span>{author} </span>|<span> {publishedDate}</span>
				</h6>
				<p>{description}</p>
				<div className={styles.btnContainer}>
					<AniLink fade className={styles.btnText} to={`/blog/${slug}`}>
						Read more <span>&#8594;</span>
					</AniLink>
				</div>
			</div>
		</article>
	);
};

export default BlogCard;
