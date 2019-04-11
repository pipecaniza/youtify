import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions/video';
import { getVideos } from '../selectors';
import VideoList from '../components/VideoList';


class VideoListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchVideos();
  }
  render() {
    return (
      <VideoList videos={this.props.videos} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videos: getVideos(state)
  }  
};

export default connect(mapStateToProps, { fetchVideos })(VideoListContainer);