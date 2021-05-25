import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
const SelectedClients = ({ title, description }) => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulCompanyLogo {
				edges {
					node {
						logo {
							file {
								url
							}
						}
					}
				}
			}
		}
	`);
	return (
		<ClientsSectionContainer>
			<div className="container">
				<LogoContainer>
					{data.allContentfulCompanyLogo.edges.map((edge) => {
						return (
							<div className="item">
								<img src={edge.node.logo.file.url} alt="logo" />
							</div>
						);
					})}
				</LogoContainer>
			</div>
		</ClientsSectionContainer>
	);
};

export default SelectedClients;

const ClientsSectionContainer = styled.section`
	width: 100%;
	margin: 2rem 0;
`;

const LogoContainer = styled.div` 
     width: 100% ;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    place-items: center center;
    place-content: center center;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    padding-bottom: 4rem;

  .item{
   width: 70%
}

@media screen and (max-width: 776px) {
     {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, 1fr);
	  width:80%
	 }
	 .item{
   width: 80%
   }
}
`;
