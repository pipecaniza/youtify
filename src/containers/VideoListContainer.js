import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchVideos, selectVideo, searchVideos, fetchVideosByIds } from '../actions/video';
import { getVideos, getSearchTermFromUrl, getPlaylistFromUrl } from '../selectors';
import VideoList from '../components/VideoList';


class VideoListContainer extends React.Component {
  componentDidMount() {
    const currentSearchTerm = getSearchTermFromUrl(this.props);
    const currentPlaylist = getPlaylistFromUrl(this.props);  

    if (currentSearchTerm){
      this.props.searchVideos(currentSearchTerm);
    } 
    else if (currentPlaylist) {
      this.props.fetchVideosByIds(currentPlaylist);
    } 
    else {
      this.props.fetchVideos();
    }
  }

  componentDidUpdate(prevProps) {
    const prevSearchTerm = getSearchTermFromUrl(prevProps);
    const currentSearchTerm = getSearchTermFromUrl(this.props);   

    const prevPlaylist = getPlaylistFromUrl(prevProps);
    const currentPlaylist = getPlaylistFromUrl(this.props);

    // Page starts
    // with no video and no filters
    if (this.props.videos.length === 0 && (!currentSearchTerm && !currentPlaylist)) {      
      this.props.fetchVideos();
    }

    // Handle back to start page
    if (!currentSearchTerm && !currentPlaylist && (prevSearchTerm !== currentSearchTerm || prevPlaylist !== currentPlaylist)) {
      this.props.fetchVideos();
    }
    
    // Handle changed search term
    if (currentSearchTerm && prevSearchTerm !== currentSearchTerm){
      this.props.searchVideos(currentSearchTerm);
      return;
    }

    // Handle changed playlist
    if (currentPlaylist && prevPlaylist !== currentPlaylist){   
      this.props.fetchVideosByIds(currentPlaylist);
      return;
    }

    console.log('CURRENT search:', currentSearchTerm, ' and playlist',currentPlaylist)
    console.log('PREV    search:', prevSearchTerm, ' and playlist',prevPlaylist)
    
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
  { fetchVideos, selectVideo, searchVideos, fetchVideosByIds }
)(VideoListContainer));