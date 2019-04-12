import constants from '../common/constants';

const defaultState = {
  playlists: [],
  isAddingPlaylist: false
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.ACTIONS.FETCH_PLAYLISTS:
      return { ...state, playlists: action.payload };
    case constants.ACTIONS.CREATE_PLAYLIST:
      return { ...state, playlists: [ ...state.playlists, action.payload ] };
    case constants.ACTIONS.REMOVE_PLAYLIST:
      return { ...state, playlists: state.playlists.filter(({id}) => id !== action.payload) };
    case constants.ACTIONS.ADD_VIDEO_TO_PLAYLIST:
    case constants.ACTIONS.REMOVE_VIDEO_FROM_PLAYLIST:
      return { ...state, playlists: state.playlists.map(
        (playlist) => {
          if (playlist.id !== action.payload.id) {
            return playlist
          }
          return action.payload;
        })
      };
    case constants.ACTIONS.CLEAN_PLAYLISTS:
      return defaultState;
    case constants.ACTIONS.ADDING_PLAYLIST:
      return { ...state, isAddingPlaylist: true }
    default:
      return state;
  }
};