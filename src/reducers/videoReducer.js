
const defaultState = {
  videos: [],
  selectedVideo: null
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'FETCH_VIDEOS':
      return { ...state, videos: action.payload };
    default:
      return state;
  }
};