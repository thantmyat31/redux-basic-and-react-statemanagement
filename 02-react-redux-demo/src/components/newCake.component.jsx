import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const NewCakeContainer = (props) => {
	const [ number, setNumber ] = useState(1);
	return (
		<div>
			<h2>Number of cake = {props.numberOfCake}</h2>
			<input type="number" value={number} onChange={(e) => setNumber(e.currentTarget.value)} />
			<button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		numberOfCake: state.cake.numberOfCake
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: (number) => dispatch(buyCake(number))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
