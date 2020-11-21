import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const CakeHook = () => {
	const numberOfCake = useSelector((state) => state.cake.numberOfCake);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Number of Cake Hook = {numberOfCake}</h2>
			<button onClick={() => dispatch(buyCake())}>Buy cake</button>
		</div>
	);
};

export default CakeHook;
