import React from 'react';
import { Link } from 'react-router-dom'
import GoogleAuthContainer from '../containers/GoogleAuthContainer';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-between">
      <Link to="/" className="navbar-brand">Youtify</Link>           
      <SearchBar />
      <GoogleAuthContainer />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sideNavbar"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};

export default Header;