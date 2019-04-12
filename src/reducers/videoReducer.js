import constants from '../common/constants';

const defaultState = {
  videos: [],
  selectedVideo: null
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.ACTIONS.FETCH_VIDEOS:    
      return { ...state, videos: action.payload };
    case constants.ACTIONS.SELECT_VIDEO:
      return { ...state, selectedVideo: action.payload };
    case constants.ACTIONS.REMOVE_SELECTED_VIDEO:
      return { ...state, selectedVideo: null };
    default:
      return state;
  }
};