import React, { createContext, useReducer, useEffect } from 'react';
import bookReducer from '../components/BookShelf/BookShelfReducer';

export const BookShelfContext = createContext();

const BookShelfContextPrivider = (props) => {
	const books = localStorage.getItem('bookShelf');
	const getBook = () => {
		return books ? JSON.parse(books) : [];
	};
	const [ bookShelf, dispatch ] = useReducer(bookReducer, getBook());

	useEffect(
		() => {
			localStorage.setItem('bookShelf', JSON.stringify(bookShelf));
		},
		[ bookShelf ]
	);

	return <BookShelfContext.Provider value={{ bookShelf, dispatch }}>{props.children}</BookShelfContext.Provider>;
};

export default BookShelfContextPrivider;
