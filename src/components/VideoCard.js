import React from 'react';
import PlaylistButtonsContainer from '../containers/PlaylistButtonsContainer';

const VideoCard = ({ video, selectVideo, isSignedIn }) => {
  return (    
    <div className="card h-100" >
      <img src={video.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{video.title}</h5>           
        <div className="btn-group">
          <button className="btn btn-primary mt-auto btn-block" onClick={() => selectVideo(video.id)}>Play!</button>
          {isSignedIn && <PlaylistButtonsContainer videoId={video.id}/>}          
        </div>        
      </div>
    </div>
  );
};

export default VideoCard;