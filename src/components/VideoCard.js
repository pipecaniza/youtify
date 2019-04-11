import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (    
    <div className="card h-100" >
      <img src={video.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{video.title}</h5>           
        <Link to="" className="btn btn-primary mt-auto btn-block">Play!</Link>
      </div>
    </div>
  );
};

export default VideoCard;