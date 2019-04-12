import React from 'react';
import { connect } from 'react-redux';
import Player from '../components/Player';
import { getSelectedVideoId } from '../selectors';
import { removeSelectedVideo } from '../actions/video';


class PlayerContainer extends React.Component {
  render() {
    return(
      <Player id={this.props.id} onClick={this.props.removeSelectedVideo} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: getSelectedVideoId(state)
  };
};

export default connect(mapStateToProps, { removeSelectedVideo })(PlayerContainer);