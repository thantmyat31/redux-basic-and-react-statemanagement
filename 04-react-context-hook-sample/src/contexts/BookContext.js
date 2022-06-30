import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [ books, setBooks ] = useState([
		{ title: 'Gone with the wind', id: 1 },
		{ title: 'Three Musketeers', id: 2 },
		{ title: 'Wars and Peace', id: 3 }
	]);

	return <BookContext.Provider value={{ books }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
