import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchVideos, selectVideo, searchVideos } from '../actions/video';
import { getVideos, getSearchTermFromUrl } from '../selectors';
import VideoList from '../components/VideoList';


class VideoListContainer extends React.Component {
  componentDidMount() {
    const currentSearchTerm = getSearchTermFromUrl(this.props);
    if (currentSearchTerm){
      this.props.searchVideos(currentSearchTerm);
    } else {
      this.props.fetchVideos();
    }
  }

  componentDidUpdate(prevProps) {
    const prevSearchTerm = getSearchTermFromUrl(prevProps);
    const currentSearchTerm = getSearchTermFromUrl(this.props);
    if (prevSearchTerm !== currentSearchTerm){
      this.props.searchVideos(currentSearchTerm);
    }
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

export default withRouter(connect(
  mapStateToProps,
  { fetchVideos, selectVideo, searchVideos }
)(VideoListContainer));