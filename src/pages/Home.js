import React from 'react';
import VideoListContainer from '../containers/VideoListContainer';

const Home = () => {
	return (
    <div id="main-container" className="m-navbar-side-left-lg">
      <div className="container pt-4">
        <VideoListContainer />      
      </div>
    </div>
	);
};

export default Home;