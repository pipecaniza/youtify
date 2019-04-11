import youtube from './youtube';

export const findVideosByTerm = async (term) => {
  return await youtube.get('/search', { params: { q: term } });
};

export const getPopularVideos = async () => {
  return await youtube.get('/videos', { params: { chart: 'mostPopular', maxResults: 20 } });
};