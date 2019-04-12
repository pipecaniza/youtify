import React from 'react';
import PlayList from '../components/Playlist'

const PlayLists = ({ playlists }) => {
  return (
    playlists.map(({name, id}) => {
      return <PlayList name={name} id={id} key={id} />
    })
  );
};

export default PlayLists;