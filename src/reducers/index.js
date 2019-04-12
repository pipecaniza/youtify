import { combineReducers } from 'redux';
import videoReducer from './videoReducer';
import authReducer from './authReducer';

export default combineReducers({
  videos: videoReducer,
  auth: authReducer
});