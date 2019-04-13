import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists, removePlaylist } from '../actions/playlist';
import { getIsSignIn, getPlaylists } from '../selectors';
import PlayLists from '../components/Playlists';

class PlaylistsContainer extends React.Component {
  componentDidMount() {
    if (this.props.isSignedIn){
      this.props.fetchPlaylists();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isSignedIn !== this.props.isSignedIn){
      this.props.fetchPlaylists();
    }
  }

  render() {  
    return (
      <PlayLists playlists={this.props.playlists} removePlaylist={this.props.removePlaylist} />
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    isSignedIn: getIsSignIn(state),
    playlists: getPlaylists(state)
  }
};

export default connect(mapStateToProps, { fetchPlaylists, removePlaylist })(PlaylistsContainer);