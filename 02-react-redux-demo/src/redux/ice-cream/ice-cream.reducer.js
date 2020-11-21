import { BUY_ICECREAM } from './ice-cream.type';

const initialState = {
	numberOfIceCream: 20
};
const iceCreamReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				numberOfIceCream: state.numberOfIceCream > 0 ? state.numberOfIceCream - 1 : state.numberOfIceCream
			};

		default:
			return state;
	}
};

export default iceCreamReducer;
