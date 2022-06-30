import React from 'react';
import BookShelfNavbar from './BookShelfNavbar';
import BookShelfContextPrivider from '../../contexts/BookShelfContext';
import BookShelfList from './BookShelfList';
import BookShelfForm from './BookShelfForm';

const BookShelf = () => {
	return (
		<div>
			<BookShelfContextPrivider>
				<BookShelfNavbar />
				<BookShelfList />
				<BookShelfForm />
			</BookShelfContextPrivider>
		</div>
	);
};

export default BookShelf;
