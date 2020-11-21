import React, { useContext } from 'react';
import { ThemeContext } from './../contexts/ThemeContext';
import { AuthContext } from './../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const { isAuthenticated, authToggle } = useContext(AuthContext);
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<nav style={{ background: theme.bg, color: theme.syntax }}>
			<h1>Context App</h1>
			<div onClick={authToggle}>{isAuthenticated ? 'Logged in' : 'Logged out'}</div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/book">Book</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
