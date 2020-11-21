import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Gallery from './components/gallery.component';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Gallery />
				</div>
			</Provider>
		);
	}
}

export default App;
