import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

const ItemContainer = (props) => {
	return (
		<div>
			<h2>
				Number of {props.name} = {props.item}
			</h2>
			<button onClick={props.buyItem}>Buy {props.name}</button>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const itemCount = ownProps.cake ? state.cake.numberOfCake : state.iceCream.numberOfIceCream;
	const itemName = ownProps.cake ? 'Cake' : 'Ice-cream';
	return {
		item: itemCount,
		name: itemName
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());
	return {
		buyItem: dispatchFunction
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
