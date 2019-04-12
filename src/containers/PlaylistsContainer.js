import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../actions/playlist';
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
    console.log(this.props.playlists) ;
    return (
      <PlayLists playlists={this.props.playlists} />
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    isSignedIn: getIsSignIn(state),
    playlists: getPlaylists(state)
  }
};

export default connect(mapStateToProps, { fetchPlaylists })(PlaylistsContainer);