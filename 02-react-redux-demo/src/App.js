import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import CakeContainer from './components/cake.component';
import CakeHook from './components/cake.hook.component';
import IceCreamContainer from './components/ice-cream.component';
import NewCakeContainer from './components/newCake.component';
import ItemContainer from './components/item.component';
import UserContainer from './components/user.component';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<UserContainer />
				======================================
				<ItemContainer cake />
				<ItemContainer />
				======================================
				<CakeHook />
				<CakeContainer />
				<IceCreamContainer />
				<NewCakeContainer />
				<br />
				<br />
				<br />
			</div>
		</Provider>
	);
}

export default App;
