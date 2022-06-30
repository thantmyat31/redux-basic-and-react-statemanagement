import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import UserContainer from './components/user.component';
import SearchContainer from './components/search.component';

import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className="app">
				<SearchContainer />
				<UserContainer />
			</div>
		</Provider>
	);
}

export default App;
