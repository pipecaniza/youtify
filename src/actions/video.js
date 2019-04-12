import { getPopularVideos } from '../apis/video';
import constants from '../common/constants';

export const fetchVideos = () => async dispatch => {
  const response = await getPopularVideos();
  console.log(response);
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