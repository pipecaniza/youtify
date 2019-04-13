import React from 'react';
import PlayList from '../components/Playlist'

const PlayLists = ({ playlists, removePlaylist }) => {
  return (
    playlists.map(({name, id}) => {
      return <PlayList name={name} id={id} key={id} removePlaylist={removePlaylist} />
    })
  );
};

export default PlayLists;