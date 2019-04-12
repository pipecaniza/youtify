import React from 'react';

const AddToPlaylist = ({playlist, onClick, videoId, icon}) => {
  return (
    <button class="dropdown-item" onClick={()=>{ onClick(playlist.id, videoId) }}>{playlist.name}<i className={icon}></i></button>
  );
};

export default AddToPlaylist;