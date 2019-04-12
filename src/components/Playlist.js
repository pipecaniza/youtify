import React from 'react';
import { Link } from 'react-router-dom';

const Playlist = ({name, id}) => {
  return (
    <li><Link to={`/Playlist/${id}`} className="nav-link" >{name}</Link></li>
  );
};

export default Playlist;