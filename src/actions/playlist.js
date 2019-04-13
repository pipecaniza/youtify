import { getPlaylists, postPlaylist, deletePlaylist, patchPlaylist } from '../apis/playlist';
import constants from '../common/constants';

export const requestFetchPlaylists = () => {
  return { type: constants.ACTIONS.REQUEST_FETCH_PLAYLISTS };
};

export const fetchPlaylists = () => async (dispatch, getState) => {
  dispatch(requestFetchPlaylists());
  const userId = getState().auth.userId;
  if (userId != null) {
    const response = await getPlaylists(userId);     
    dispatch({ type: constants.ACTIONS.FETCH_PLAYLISTS, payload: response.data });  
  } else {
    dispatch(cleanPlaylists());
  }
};

export const cleanPlaylists = () => {
  return { type: constants.ACTIONS.CLEAN_PLAYLISTS };
};

export const createPlaylist = name => async (dispatch, getState) => {
  dispatch(requestFetchPlaylists());
  const userId = getState().auth.userId;
  const playlist = {
    userId ,
    name,
    videos: []
  }
  const response = await postPlaylist(playlist);
  dispatch({ type: constants.ACTIONS.CREATE_PLAYLIST, payload: response.data });
};

export const removePlaylist = id => async dispatch => {
  const response = await deletePlaylist(id);
  dispatch({ type: constants.ACTIONS.REMOVE_PLAYLIST, payload: id });
};

export const addVideoToPlaylist = (playlistId, videoId) => async (dispatch, getState) => {
  let playlist = getState().playlists.playlists.find(({id}) => id === playlistId);
  if (!playlist){
    return;    
  }
  playlist = { ...playlist, videos: [ ...playlist.videos, videoId ] };
  const response = await patchPlaylist(playlistId, playlist);  
  dispatch({ type: constants.ACTIONS.ADD_VIDEO_TO_PLAYLIST, payload: response.data });
};

export const removeVideoFromPlaylist = (playlistId, videoId) => async (dispatch, getState) => {
  let playlist = getState().playlists.playlists.find(({id}) => id === playlistId);
  if (!playlist){
    return;    
  }
  playlist = { 
    ...playlist, 
    videos: playlist.videos.filter(
      (id) => id !== videoId
    ) 
  };
  const response = await patchPlaylist(playlistId, playlist);
  dispatch({ type: constants.ACTIONS.REMOVE_VIDEO_FROM_PLAYLIST, payload: response.data });
};

export const addingPlaylist = () => {
  return { type: constants.ACTIONS.ADDING_PLAYLIST };
}