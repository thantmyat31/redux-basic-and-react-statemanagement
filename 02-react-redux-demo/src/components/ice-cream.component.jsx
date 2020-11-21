import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

const IceCreamContainer = () => {
	const numberOfIceCream = useSelector((state) => state.iceCream.numberOfIceCream);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Number of Ice-cream = {numberOfIceCream}</h2>
			<button onClick={() => dispatch(buyIceCream())}>Buy Ice-cream</button>
		</div>
	);
};

export default IceCreamContainer;
