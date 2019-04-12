import { combineReducers } from 'redux';
import videoReducer from './videoReducer';
import authReducer from './authReducer';
import playlistReducer from './playlistReducer';

export default combineReducers({
  videos: videoReducer,
  auth: authReducer,
  playlists: playlistReducer
});