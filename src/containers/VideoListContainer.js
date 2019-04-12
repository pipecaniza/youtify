import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos, selectVideo } from '../actions/video';
import { getVideos } from '../selectors';
import VideoList from '../components/VideoList';


class VideoListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchVideos();
  }
  render() {
    return (
      <VideoList videos={this.props.videos} selectVideo={this.props.selectVideo} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videos: getVideos(state)
  }  
};

export default connect(mapStateToProps, { fetchVideos, selectVideo })(VideoListContainer);