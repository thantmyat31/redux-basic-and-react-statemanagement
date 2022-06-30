import React, { useContext } from 'react';
import { BookShelfContext } from './../../contexts/BookShelfContext';

const BookShelfNavbar = () => {
	const { bookShelf } = useContext(BookShelfContext);
	return (
		<div className="navbar">
			<h1>My Reading List</h1>
			<p>Currently you have {bookShelf.length} books to get through...</p>
		</div>
	);
};

export default BookShelfNavbar;
