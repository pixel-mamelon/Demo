import React from 'react'
import styled from 'styled-components'

const HeroTitleLeft = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  max-width: 60%;
  margin: 4rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;

  .title {
    letter-spacing: 2.5px;
    color: var(--deepPurple);
    font-size: var(--heroHeader);
    font-weight: 700;
   
  }

  .subtitle {
    font-size: var(--heroText);
    text-align: left;
    ${'' /*  max-width: 57%; */} font: 'poppins';
    letter-spacing: 0px;
    color: var(--deepPurple);
    line-height: 1.75rem;
  }
  @media (max-width: 768px) {
     {
      display: flex;
      max-width: 90%;
      align-items: center;
      margin: 1rem  1rem;
      justify-content: center;
  flex-direction: column;
  
    }
    .subtitle {
      text-align: center;
    }
  }
`
export default HeroTitleLeft
