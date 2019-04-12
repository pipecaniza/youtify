import React from 'react';

const OptionsPlaylist = ({playlist, onClick, videoId, icon}) => {
  return (
    <button class="dropdown-item" onClick={()=>{ onClick(playlist.id, videoId) }}><i className={icon}></i>&nbsp;{playlist.name}</button>
  );
};

export default OptionsPlaylist;