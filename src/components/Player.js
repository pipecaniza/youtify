import '../style/player.css'

import React from 'react';

const Player = ({ id, onClick }) => {
  if (!id){
    return null;
  }
  
  const videoSrc = `https://www.youtube.com/embed/${id}`;

  return (    
    <div class="card bg-dark-alpha-low" id="player">
      <div class="card-header text-white bg-dark-alpha-hi">
        Playing now!
        <button type="button" class="close" onClick={onClick} >
          <span className="text-white">&times;</span>
        </button>
      </div>
      <div class="card-body">
        <div className="embed-responsive">
          <iframe title="video player" src={videoSrc}></iframe>
        </div>
      </div>  
    </div>      
  );  
};

export default Player;