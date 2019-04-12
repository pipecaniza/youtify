import React from 'react';
import { Router, Route, Switch } from 'react-router';
import history from '../history';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Header from './Header';
import PlayerContainer from '../containers/PlayerContainer';
import PlaylistsContainer from '../containers/PlaylistsContainer';
import Navigation from './Navigation';

const App = () => {
	return (
		<div>
			<Router history={history}>
				<Header />      
        <Navigation />
        <PlayerContainer/>      
        <PlaylistsContainer />
				<Switch>
					<Route path='/' exact component={Home} />
          <Route path='/Search/:searchTerm?' exact component={Search} />
				</Switch>        
			</Router>      
		</div>
	);
};

export default App;