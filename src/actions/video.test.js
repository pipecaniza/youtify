import constants from '../common/constants';
import { fetchVideos } from '../actions/video';

import { getPopularVideos } from '../apis/video';

jest.mock('../apis/video',() => ({
  getPopularVideos: jest.fn()
}))

describe('fetchVideos', () => {
  it('should handle request fetch videos and fetch videos', async () => {
    getPopularVideos.mockImplementation(() => {return { data: { items: [] } }})
    const dispatch = jest.fn();
    await fetchVideos()(dispatch)
    
    expect(dispatch).toBeCalledWith({ type: constants.ACTIONS.REQUEST_FETCH_VIDEOS });
    expect(dispatch).toBeCalledWith({ type: constants.ACTIONS.FETCH_VIDEOS, payload: [] });
  });
})