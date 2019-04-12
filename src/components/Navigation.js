import React from 'react';
import SearchBar from './SearchBar';
import PlaylistsContainer from '../containers/PlaylistsContainer';


const Navigation = () => {
  return (
    <nav className="navbar navbar-side navbar-side-left navbar-side-expand-lg navbar-dark bg-dark-alpha-med collapse" id="sideNavbar">      
      <ul className="navbar-nav">
        <li><SearchBar /></li>        
        <li>PlayLists</li> 
        <PlaylistsContainer />       
      </ul>
    </nav>
  );
};

export default Navigation;