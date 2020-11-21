import React, { useContext } from 'react';
import { BookShelfContext } from '../../contexts/BookShelfContext';
import BookShelfDetail from './BookShelfDetail';

const BookShelfList = () => {
	const { bookShelf } = useContext(BookShelfContext);
	return bookShelf.length ? (
		<div className="book-list">
			<ul>{bookShelf.map((book) => <BookShelfDetail key={book.id} id={book.id} />)}</ul>
		</div>
	) : (
		<div className="empty">No book to read.</div>
	);
};

export default BookShelfList;
