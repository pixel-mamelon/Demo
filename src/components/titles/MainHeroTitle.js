import React from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const MainHeroTitle = ({ title, subtitle, children }) => {
	return (
		<TitleWrapper>
			<h2 className="title animate-pop-in">{title}</h2>
			<p className="subtitle animate-pop-in">{subtitle}</p>
			<div className="button-container animate-pop-in">
				<AniLink fade hex="#AEECEE" to="/about" className="btn-primary">
					About us
				</AniLink>
			</div>
		</TitleWrapper>
	);
};

const TitleWrapper = styled.div`
	margin: 4rem 0;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: left;
	
	
	.title {
		max-width: 50%;
		letter-spacing: 2.5px;
		color: var(--deepPurple);
        font-size: var(--heroHeader);
		font-weight: 700;
		color: var(--mainWhite);
		
	}
	
	.subtitle {
    font-size: var(--heroText);
		text-align: left;
		max-width: 50%;
		font: 'poppins';
		letter-spacing: 0px;
		color: var(--mainWhite);
		line-height: 2.2rem;
	}
  }
.animate-pop-in {
  animation: pop-in .7s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
  opacity: 0;
}

@keyframes pop-in {
  0% {
    opacity: 0;
    transform: translateY(-4rem) scale(.8);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}


	@media (max-width: 776px) {
		 {
			margin: 1rem 2rem;
			.title {
				max-width: 100%;
				line-height: 3.5rem;
			}
			.subtitle {
				max-width: 100%;
				line-height: 1.5rem;
			}
		}
	}
	
`;
export default MainHeroTitle;
