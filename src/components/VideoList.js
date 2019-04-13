import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos, selectVideo, isSignedIn }) => {
  if (videos.length > 0) {
    return (
      <div className="row">
        {
          videos.map((video) => {
            return (
              <div className="col-md-4 mb-4" key={video.id}>              
                <VideoCard video={video} selectVideo={selectVideo} isSignedIn={isSignedIn} />
              </div>
            );
          })
        }
      </div>
    );
  }
  else {
    return (
      <div className="jumbotron jumbotron-fluid">
        <center>
          <div className="container">
            <h1 className="display-4"><i className="far fa-frown"></i></h1>
            <p className="lead">There's nothing here.</p>
          </div>
        </center>
      </div>  
    );
  }
};

export default VideoList;

