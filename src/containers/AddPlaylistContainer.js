import React from 'react';
import { connect } from 'react-redux';
import { getIsAddingPlaylist } from '../selectors';
import { createPlaylist, addingPlaylist } from '../actions/playlist';
import AddPlaylistInput from '../components/AddPlaylistInput';

class AddPlaylistContainer extends React.Component {
  renderAddButton() {
    return(
      <div className="m-2">
        <button className="form-control bg-dark border-dark text-white" onClick={this.props.addingPlaylist}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    );
  }

  renderInput() {
    return(
      <AddPlaylistInput addPlaylist={this.props.createPlaylist} />
    );
  }

  render() {
    if (!this.props.isAddingPlaylist) {
      return this.renderAddButton();
    }
    return this.renderInput();
  }
}

const mapStateToProps = (state) => {
  return {
    isAddingPlaylist: getIsAddingPlaylist(state)
  };
};

export default connect(mapStateToProps, { createPlaylist, addingPlaylist })(AddPlaylistContainer);