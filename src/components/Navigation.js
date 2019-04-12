import React from 'react';
import PlaylistsContainer from '../containers/PlaylistsContainer';
import AddPlaylistContainer from '../containers/AddPlaylistContainer';


const Navigation = () => {
  return (
    <nav className="navbar navbar-side navbar-side-left navbar-side-expand-lg navbar-dark bg-dark-alpha-med collapse p-2 pt-4" id="sideNavbar">      
      <ul className="navbar-nav">        
        <center className="text-white">Playlists</center>
        <PlaylistsContainer />     
        <AddPlaylistContainer />
      </ul>
    </nav>
  );
};

export default Navigation;