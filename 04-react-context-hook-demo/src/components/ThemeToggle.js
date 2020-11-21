import React, { useContext } from 'react';
import { ThemeContext } from './../contexts/ThemeContext';

const ThemeToggle = () => {
	const { themeToggle } = useContext(ThemeContext);
	return <button onClick={themeToggle}>Theme Toggle</button>;
};

export default ThemeToggle;
