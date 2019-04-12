import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos, selectVideo }) => {
  return (
    <div className="row">
      {
        videos.map((video) => {
          return (
            <div className="col-md-4 mb-4" key={video.id}>
              <VideoCard video={video} selectVideo={selectVideo} />
            </div>
          );
        })
      }
    </div>
  );
};

export default VideoList;