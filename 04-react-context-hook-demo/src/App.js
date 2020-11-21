import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

import { Switch, Route, Redirect } from 'react-router-dom';
import BookShelf from './components/BookShelf/BookShelf';
import NotFound from './components/NotFound';
import GlobalNavigation from './components/GlobalNavigation';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<GlobalNavigation />
				<Switch>
					<Route
						exact
						path="/book"
						render={() => (
							<ThemeContextProvider>
								<AuthContextProvider>
									<Navbar />
									<BookContextProvider>
										<BookList />
									</BookContextProvider>
									<ThemeToggle />
								</AuthContextProvider>
							</ThemeContextProvider>
						)}
					/>
					<Route path="/not-found" component={NotFound} />
					<Route exact path="/" render={() => <BookShelf />} />
					<Redirect to="/not-found" />
				</Switch>
			</div>
		);
	}
}

export default App;
