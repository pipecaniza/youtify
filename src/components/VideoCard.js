import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (    
    <div className="card h-100" >
      <img src={video.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{video.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>       
        
          <Link to="" className="btn btn-primary align-self-end">Play!</Link>
        
        
      </div>
    </div>
  );
};

export default VideoCard;