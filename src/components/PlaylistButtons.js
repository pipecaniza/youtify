import React from 'react';
import AddToPlaylist from '../components/AddToPlaylist';

const hasBeenAlreadyAdded = (playlist, videoId) => {
  return playlist.videos.find((video) => video === videoId)
}

const PlaylistButtons = ({playlists, addAction, removeAction, videoId}) => {  
  return (
    <div class="dropdown">
      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Add To Playlist
      </a>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        {
          playlists.map((playlist, index) => {        
            let onClickAction = addAction;
            let icon = 'fas fa-plus';
            if(hasBeenAlreadyAdded(playlist, videoId)){
              onClickAction = removeAction;
              icon = 'fas fa-minus';
            }
            return <AddToPlaylist playlist={playlist} onClick={onClickAction} icon={icon} key={`${videoId}-${index}`} videoId={videoId} />;
          })
        }
      </div>
    </div>    
  );
};

export default PlaylistButtons;