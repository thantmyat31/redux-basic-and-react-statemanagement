import React from 'react';
import { Link } from 'react-router-dom';

const GlobalNavigation = () => {
	return (
		<ul style={{ listStyle: 'none', display: 'flex', padding: '0' }}>
			<li style={{ paddingRight: '20px' }}>
				<Link style={{ textDecoration: 'none', color: '#ffffff' }} to="/">
					BookShelf
				</Link>
			</li>
			<li>
				<Link style={{ textDecoration: 'none', color: '#ffffff' }} to="/book">
					Theme Option Example
				</Link>
			</li>
		</ul>
	);
};

export default GlobalNavigation;
