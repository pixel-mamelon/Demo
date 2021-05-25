import React from 'react'
import styled from 'styled-components'

const SectionTitle = ({ title, subtitle }) => {
  return (
	  <div className="container">
    <TitleWrapper>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
    </TitleWrapper>
	</div>
  )
}

const TitleWrapper = styled.div`
	text-align: center;
	padding: 4rem 0;
	 .title {
		padding-bottom: 1rem;
		font-family: 'Poppins';
		font-weight: 700;
		font-size: var(--sectionHeader);
		width: 60%;
		margin: auto;
		letter-spacing: 1.7px;
		color: var(--deepPurple);
		opacity: 1;
	}

	.subtitle {
		font-family: 'Poppins';
		letter-spacing: 0px;
		color: var(--deepPurple);
		opacity: 1;
		text-align: center;
		max-width: 60%;
		margin: auto;
    font-size: var(--sectionText);

		line-height: 1.75rem;
	}
	@media (max-width: 776px) {
		 {
			margin: 0 0.35rem;
		}
		.subtitle{
			max-width: 90%
		}
		.title{
			max-width: 100%
		}
	}
`;
export default SectionTitle;
