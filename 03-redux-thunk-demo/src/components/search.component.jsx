import React from 'react';
import { userSearch } from '../redux/user/user.action';
import { connect } from 'react-redux';

const inputContainer = {
	width: '100%',
	margin: '20px 0'
};

const inputText = {
	width: '100%',
	display: 'block',
	height: '30px',
	textIndent: '10px',
	borderRadius: '5px',
	border: 'none',
	backgroundColor: '#f6f6f6'
};

const SearchContainer = ({ userSearch }) => {
	return (
		<div style={inputContainer}>
			<input
				style={inputText}
				type="text"
				placeholder="Search..."
				onChange={(e) => userSearch(e.target.value.trim())}
			/>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		userSearch: (query) => dispatch(userSearch(query))
	};
};

export default connect(null, mapDispatchToProps)(SearchContainer);
