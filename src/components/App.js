import React from 'react';
import { Router, Route, Switch } from 'react-router';
import history from '../history';
import Home from './Home';
import Header from './Header';

const App = () => {
	return (
		<div>
			<Router history={history}>
				<Header />
				<Switch>
					<Route path='/' exact component={Home} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;