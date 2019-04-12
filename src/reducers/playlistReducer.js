import constants from '../common/constants';

const defaultState = {
  playLists: []
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.ACTIONS.FETCH_PLAYLISTS:
      return { ...state, playLists: action.payload };
    case constants.ACTIONS.CREATE_PLAYLIST:
      return { ...state, playLists: [ ...playLists, action.payload ] };
    case constants.ACTIONS.REMOVE_PLAYLIST:
      return { ...state, playLists: state.playLists.filter(({id}) => id !== action.payload) };
    case constants.ACTIONS.ADD_SONG_TO_PLAYLIST:
    case constants.ACTIONS.REMOVE_VIDEO_FROM_PLAYLIST:
      return { ...state, playLists: state.playLists.map(
        (playlist) => {
          if (id !== action.payload.id) {
            return playlist
          }
          return action.payload;
        })
      };
    case constants.ACTIONS.CLEAN_PLAYLISTS:
      return defaultState;
    default:
      return state;
  }
};