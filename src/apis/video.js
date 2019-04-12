import youtube from './youtube';

export const findVideosByTerm = async (term) => {
  return await youtube.get('/search', { params: { q: term, type: 'video' } });
};

export const getPopularVideos = async () => {
  return await youtube.get('/videos', { params: { chart: 'mostPopular', maxResults: 20 } });
};

export const getVideosById = async (ids) => {
  return await youtube.get('/videos', { params: { id: ids } });
};