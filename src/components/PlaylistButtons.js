import React from 'react';
import OptionsPlaylist from './OptionsPlaylist';

const hasBeenAlreadyAdded = (playlist, videoId) => {
  return playlist.videos.find((video) => video === videoId)
}

const PlaylistButtons = ({playlists, addAction, removeAction, videoId}) => {  
  return (
    <div className="dropdown">
      <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-cog"></i>
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        {
          playlists.map((playlist, index) => {        
            let onClickAction = addAction;
            let icon = 'fas fa-plus';
            if(hasBeenAlreadyAdded(playlist, videoId)){
              onClickAction = removeAction;
              icon = 'fas fa-minus';
            }
            return <OptionsPlaylist playlist={playlist} onClick={onClickAction} icon={icon} key={`${videoId}-${index}`} videoId={videoId} />;
          })
        }
      </div>
    </div>    
  );
};

export default PlaylistButtons;