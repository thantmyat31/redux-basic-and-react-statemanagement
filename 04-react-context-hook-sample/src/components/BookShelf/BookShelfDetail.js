import React, { useContext } from 'react';
import { BookShelfContext } from '../../contexts/BookShelfContext';

const BookShelfDetail = ({ id }) => {
	const { bookShelf, dispatch } = useContext(BookShelfContext);
	const bookDetail = bookShelf.find((book) => book.id === id);

	return (
		<li onClick={() => dispatch({ type: 'REMOVE_BOOK', id })}>
			<div className="title">{bookDetail.title}</div>
			<div className="author">{bookDetail.author}</div>
		</li>
	);
};

export default BookShelfDetail;
