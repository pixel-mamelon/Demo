import React from 'react';
import styled from 'styled-components';

const BlogTitle = ({ title, subtitle, author, publishedDate }) => {
	return (
		<TitleWrapper>
			<h2 className="title">{title}</h2>
			<h6>
            <span className="author">{author} </span>|<span className="publishedDate"> {publishedDate}</span>
          </h6>
			<p className="subtitle">{subtitle}</p>
			
		</TitleWrapper>
	);
};

const TitleWrapper = styled.div`
 
margin: 4rem 10rem 0 10rem; 
	display: flex;
	justify-content: flex-start;
    flex-direction: column
}

h6 {
	color: #707070;
	text-transform: capitalize;
	letter-spacing: 1.2px;
    font-size: 16px;
  
	font-weight: 400;
	
}
h6:after {
    content: "";
    width: 50px;
    height: 1px;
    display: block;
    background: #ff3921;
    margin: 0.5rem 0px;
}
	.title {
		letter-spacing: 2.5px;
		color: var(--deepPurple);
		font-size: 2.1rem;
		font-weight: 700;
		color: var(--deepPurple);
		max-width:100%;
        letter-spacing: 1.7px;

	}

	.subtitle {
		
		max-width: 100%;
		font: 'poppins';
		letter-spacing: 0px;
		color: var(--deepPurple);
		line-height: 1.75rem;
	}
	@media (max-width: 776px) {
		margin: 1rem 2rem 0;
			.title{
				max-width: 100%;			
			}

	}
`;
export default BlogTitle;
