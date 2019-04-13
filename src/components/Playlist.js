import React from 'react';
import { Link } from 'react-router-dom';

const Playlist = ({name, id, removePlaylist}) => {
  return (
    <li>
      <div className="d-flex justify-content-start">
        <Link to={`/Playlist/${id}`} className="nav-link btn-block playlist" >{name}</Link>
        <a className="remove-playlist ml-auto remove-playlist" onClick={() => {removePlaylist(id)}}>
            <i className="fas fa-times"></i>
        </a>
      </div>
    </li>
  );
};

export default Playlist;