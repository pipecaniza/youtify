import React from 'react';
import { Link } from 'react-router-dom'
import GoogleAuthContainer from '../containers/GoogleAuthContainer';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Youtify</Link>
      <GoogleAuthContainer />
    </nav>
  );
};

export default Header;