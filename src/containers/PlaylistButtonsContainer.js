import React from 'react';
import { connect } from 'react-redux';
import { getPlaylists } from '../selectors';
import { addVideoToPlaylist, removeVideoFromPlaylist } from '../actions/playlist';
import PlaylistButtons from '../components/PlaylistButtons';


class PlaylistButtonsContainer extends React.Component {
  render() {
    return(
      <PlaylistButtons 
        playlists={this.props.playlists} 
        addAction={this.props.addVideoToPlaylist} 
        removeAction={this.props.removeVideoFromPlaylist} 
        videoId={this.props.videoId}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlists: getPlaylists(state)
  };
};

export default connect(mapStateToProps, { addVideoToPlaylist, removeVideoFromPlaylist })(PlaylistButtonsContainer);