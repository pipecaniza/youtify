import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos, selectVideo, isSignedIn }) => {
  return (
    <div className="row">
      {
        videos.map((video) => {
          console.log(video.id.videoId)
          return (
            <div className="col-md-4 mb-4" key={video.id}>              
              <VideoCard video={video} selectVideo={selectVideo} isSignedIn={isSignedIn} />
            </div>
          );
        })
      }
    </div>
  );
};

export default VideoList;