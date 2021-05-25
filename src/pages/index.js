import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/mainheader/Header'
import headerImage from '../images/header.png'
import SelectedClients from '../components/SelectedClients'
import MainHeroTitle from '../components/titles/MainHeroTitle'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import ServiceList from '../components/services/ServiceList'
import SectionTitle from '../components/titles/SectionTitle'
import BlogList from '../components/Blog/BlogList';


const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Header imageURL={headerImage}>
				<div className="container">
					<MainHeroTitle
						title="Your story starts here"
						subtitle="Qui cupidatat ipsum dolore velit et irure cillum in dolore. Qui cupidatat ipsum dolore velit et ipsum dolore velit et irure cillum in dolore. Ad Ad consectetur consequat fugiatollit sunt sint id aliqua."
					/>
				</div>
			</Header>
			<div className="section-wrapper">
				<SectionTitle
					title="Our services"
					subtitle=" Qui cupidatat ipsum dolore velit et irure cillum in dolore. Cillum in dolore qui cupidatat ipsum dolore velit et irure cillum in dolore "
				/>
				<ServiceList />
			</div>
			<div className="blog-wrapper">
				<SectionTitle
					title="Latest news"
					subtitle=" Qui cupidatat ipsum dolore velit et irure cillum in dolore. Cillum in dolore qui cupidatat ipsum dolore velit et irure cillum in dolore "
				/>

				<BlogList/>

				<SectionTitle
					title="Selected clients"
					subtitle=" Qui cupidatat ipsum dolore velit et irure cillum in dolore. Cillum in dolore qui cupidatat ipsum dolore velit et irure cillum in dolore "
				/>
			</div>
			<SelectedClients />
		</Layout>
	);
};


export default IndexPage;
