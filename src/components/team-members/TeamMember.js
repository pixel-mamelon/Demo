import React from 'react';
import styles from './member.module.scss';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const TeamMember = ({ name, title, description, src }) => {
	return (
		<div className={styles.cardWrapper}>
			<div className={styles.profile}>
				<img alt="profile" src={src} className={styles.thumbnail} />

				<h3 className={styles.name}>{name}</h3>
				<p className={styles.title}>{title}</p>
				<p className={styles.description}>{description}</p>
				{/* 	<button type="button" className="btn">Read more</button> */}
			</div>

			<div className={styles.socialIcons}>
				<div className={styles.icon}>
					<a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
						<FaTwitter />
					</a>
				</div>

				<div className={styles.icon}>
					<a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
						<FaFacebookF />
					</a>
				</div>

				<div className={styles.icon}>
					<a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
						<FaLinkedinIn />
					</a>
				</div>
			</div>
		</div>
	);
};

export default TeamMember;

