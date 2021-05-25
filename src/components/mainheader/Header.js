import React from 'react';
import headerStyles from './header.module.scss';
const Header = ({ imageURL, children }) => {
	return imageURL ? (
		<div
			className={headerStyles.hero}
			style={{
				backgroundImage: `url(${imageURL})`,
				height: 'calc(100vh - 62px)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				position: 'relative',
				overflow: 'hidden',
				margin: '0',
				width: '100%',	
				transformStyle: 'preserve-3d',
  				perspective: '100px',	
				color: '#FAFAFA',
			}}
		>
			<div className={headerStyles.overlay}>{children}</div>
		
		</div>
	) : (
		<div
			className={headerStyles.bgColor}
			style={{
				height: '40vh',
				backgroundColor: '#FAFAFA',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				position: 'relative',
				overflow: 'hidden',
				margin: '0',
				width: '100%'
			}}
		>
			<div className={headerStyles.subheroContainer}>{children}</div>
		</div>
	);
};

export default Header;
