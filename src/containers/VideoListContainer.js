import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchVideos, selectVideo, searchVideos, fetchVideosByIds } from '../actions/video';
import { getVideos, getSearchTermFromUrl, getPlaylistFromUrl, getIsSignIn, getIsLoadingVideos } from '../selectors';
import VideoList from '../components/VideoList';
import Spinner from '../components/Spinner';


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

    if (prevSearchTerm === currentSearchTerm && prevPlaylist === currentPlaylist)
      return;

    // Handle back to start page
    if (!currentSearchTerm && !currentPlaylist) {
      this.props.fetchVideos();
      return;
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
  }

  render() {
    return (
      <>      
        
          <center>
            <div className="text-dark big-spinner">   
              <Spinner isLoading={this.props.isLoading} text="Loading..."/>
            </div>
          </center>
        
        {
          !this.props.isLoading &&
          <VideoList videos={this.props.videos} selectVideo={this.props.selectVideo} isSignedIn={this.props.isSignedIn} />
        }        
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videos: getVideos(state),
    isSignedIn: getIsSignIn(state),
    isLoading: getIsLoadingVideos(state)
  }  
};

export default withRouter(connect(
  mapStateToProps,
  { fetchVideos, selectVideo, searchVideos, fetchVideosByIds }
)(VideoListContainer));