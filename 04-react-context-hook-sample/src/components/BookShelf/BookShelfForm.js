import React, { useContext, useState } from 'react';
import { BookShelfContext } from '../../contexts/BookShelfContext';

const BookShelfForm = () => {
	const { dispatch } = useContext(BookShelfContext);
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: 'ADD_BOOK',
			book: {
				title,
				author
			}
		});
		setTitle('');
		setAuthor('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Add New Book</label>
			<input
				type="text"
				name="title"
				placeholder="Title"
				onChange={(e) => setTitle(e.currentTarget.value)}
				value={title}
				required
			/>
			<input
				type="text"
				name="author"
				placeholder="Author"
				onChange={(e) => setAuthor(e.currentTarget.value)}
				value={author}
				required
			/>
			<input type="submit" value="Add Book" />
		</form>
	);
};

export default BookShelfForm;
