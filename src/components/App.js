import React from 'react';
import { Router, Route, Switch } from 'react-router';
import history from '../history';
import Home from '../pages/Home';
import Header from './Header';
import PlayerContainer from '../containers/PlayerContainer';

const App = () => {
	return (
		<div>
			<Router history={history}>
				<Header />      
        <PlayerContainer/>      
				<Switch>
					<Route path='/' exact component={Home} />
				</Switch>        
			</Router>      
		</div>
	);
};

export default App;