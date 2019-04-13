import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists, removePlaylist } from '../actions/playlist';
import { getIsSignIn, getPlaylists, getIsLoadingPlaylists } from '../selectors';
import PlayLists from '../components/Playlists';
import Spinner from '../components/Spinner';

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
      <>
        <center>
          <div className="text-white mt-3">
            <Spinner isLoading={this.props.isLoading} />
          </div>
        </center>
        <PlayLists playlists={this.props.playlists} removePlaylist={this.props.removePlaylist} />
      </>
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    isSignedIn: getIsSignIn(state),
    playlists: getPlaylists(state),
    isLoading: getIsLoadingPlaylists(state)
  }
};

export default connect(mapStateToProps, { fetchPlaylists, removePlaylist })(PlaylistsContainer);