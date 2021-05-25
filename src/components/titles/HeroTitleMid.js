import React from 'react'
import styled from 'styled-components'

const HeroTitleMid = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
${'' /* 	margin: 4rem 0; */}
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	
	
}

	.title {
		letter-spacing: 2.5px;
		color:  #1d1145;
    font-size: var(--heroHeader);
		font-weight: 700;
		max-width:70%;
	
	}

	.subtitle {
	
		text-align: center;
		max-width: 60%;
		font: 'poppins';
		letter-spacing: 0px;
		color:  #1d1145;
		line-height: 1.75rem;
    font-size: var(--heroText);
	}
	@media (max-width: 776px) {
		margin: 0 1.5rem;
			.title{
				max-width: 100%;

			
			}
			.subtitle{
		
				max-width: 90%;
					
			}
	}
`;
export default HeroTitleMid;
