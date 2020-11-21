import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = (props) => {
	console.log(props);
	return (
		<div>
			<h2>Number of cake = {props.numberOfCake}</h2>
			<button onClick={props.buyCake}>Buy cake</button>
		</div>
	);
};

const mapStateToProp = (state) => {
	return {
		numberOfCake: state.cake.numberOfCake
	};
};

const mapDispatchToProp = (dispatch) => {
	return {
		buyCake: () => dispatch(buyCake())
	};
};

export default connect(mapStateToProp, mapDispatchToProp)(CakeContainer);
