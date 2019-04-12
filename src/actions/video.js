import { getPopularVideos, findVideosByTerm, getVideosById } from '../apis/video';
import constants from '../common/constants';

export const fetchVideos = () => async dispatch => {
  const response = await getPopularVideos();    
  const videos = response.data.items.map((item) => {
    return {
      id: item.id,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,      
    }
  });
  dispatch({ type: constants.ACTIONS.FETCH_VIDEOS, payload: videos });
}

export const fetchVideosByIds = (playlistId) => async (dispatch, getState) => {  
  const playlist = getState().playlists.playlists.find((playlist) => playlist.id === playlistId);
  if (!playlist || playlist.videos.length <= 0) {
    console.log("asdddddddddd");
    dispatch({ type: constants.ACTIONS.FETCH_VIDEOS, payload: [] });
    return;
  } 
  
  const response = await getVideosById(playlist.videos.reduce((prev, current) => {return prev + ',' + current }) );    
  const videos = response.data.items.map((item) => {
    return {
      id: item.id,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,      
    }
  });
  dispatch({ type: constants.ACTIONS.FETCH_VIDEOS, payload: videos });
}

export const searchVideos = (term) => async dispatch => {
  const response = await findVideosByTerm(term);     
  const videos = response.data.items.map((item) => {
    return {
      id: item.id,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,      
    }
  });
  dispatch({ type: constants.ACTIONS.FETCH_VIDEOS, payload: videos });
}

export const selectVideo = (id) => {
  return { type: constants.ACTIONS.SELECT_VIDEO, payload: id };
};

export const removeSelectedVideo = () => {
  return { type: constants.ACTIONS.REMOVE_SELECTED_VIDEO };
};