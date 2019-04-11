import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => {
  return (
    <div className="row">
      {
        videos.map((video) => {
          return (
            <div className="col-md-4 mb-4">
              <VideoCard video={video} key={video.id} />
            </div>
          );
        })
      }
    </div>
  );
};

export default VideoList;