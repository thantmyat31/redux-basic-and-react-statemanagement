const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore; //To store the initial state
const combineReducer = redux.combineReducers; //To combine the muliple reducers
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//action start
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const buyCake = () => {
	return {
		type: BUY_CAKE,
		info: 'action to buy cake'
	};
};
const buyIceCream = () => {
	return {
		type: BUY_ICECREAM,
		info: 'action to buy ice-cream'
	};
};

//reducer start
const initialCake = {
	numberOfCake: 10
};

const initialIceCream = {
	numberOfIceCream: 20
};

const cakeReducer = (state = initialCake, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numberOfCake: state.numberOfCake - 1
			};

		default:
			return state;
	}
};

const iceCreamReducer = (state = initialIceCream, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				numberOfIceCream: state.numberOfIceCream - 1
			};

		default:
			return state;
	}
};

//store start
//create rootReducer to merge/combine the multiple reducers in one root
const rootReducer = combineReducer({
	cake: cakeReducer,
	iceCream: iceCreamReducer
});
// store the application state
const store = createStore(rootReducer, applyMiddleware(logger));
//getState() --> this method access to get current state
console.log('Initial state', store.getState());
//subscribe() --> this method work as returned listener when state is updated
const unsubscribe = store.subscribe(() => {});
//dispatch(action) --> this method access the action as parameter to update the state
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();
