import constants from '../common/constants';
import videoReducer from './videoReducer';
import deepFreeze from 'deep-freeze';

describe('video reducer', () => {
  it('should handle initial state', () => {
    expect(
      videoReducer(undefined, { })
    ).toEqual({
      videos: [],
      selectedVideo: null
    });
  });

  it('should handle FETCH_VIDEOS from an empty state', () => {
    const stateBefore = {
      videos: [],
      selectedVideo: null
    };
    const action = {
      type: constants.ACTIONS.FETCH_VIDEOS,
      payload: ['video1', 'video2']
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      videoReducer(stateBefore, action)
    ).toEqual({
      videos: ['video1', 'video2'],
      selectedVideo: null
    });
  });

  it('should handle FETCH_VIDEOS from an existing state', () => {
    const stateBefore = {
      videos: ['video1'],
      selectedVideo: 'video 0'
    };
    const action = {
      type: constants.ACTIONS.FETCH_VIDEOS,
      payload: ['video2', 'video3']
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      videoReducer(stateBefore, action)
    ).toEqual({
      videos: ['video2', 'video3'],
      selectedVideo: 'video 0'
    });
  });

  it('should handle SELECT_VIDEO from an empty state', () => {
    const stateBefore = {
      videos: [],
      selectedVideo: null
    };
    const action = {
      type: constants.ACTIONS.SELECT_VIDEO,
      payload: 'video0'
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      videoReducer(stateBefore, action)
    ).toEqual({
      videos: [],
      selectedVideo: 'video0'
    });
  });

  it('should handle SELECT_VIDEO from an existing state', () => {
    const stateBefore = {
      videos: ['video1'],
      selectedVideo: 'video0'
    };
    const action = {
      type: constants.ACTIONS.SELECT_VIDEO,
      payload: 'video1'
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      videoReducer(stateBefore, action)
    ).toEqual({
      videos: ['video1'],
      selectedVideo: 'video1'
    });
  });

  it('should handle REMOVE_SELECTED_VIDEO from an empty state', () => {
    const stateBefore = {
      videos: [],
      selectedVideo: null
    };
    const action = {
      type: constants.ACTIONS.REMOVE_SELECTED_VIDEO
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      videoReducer(stateBefore, action)
    ).toEqual({
      videos: [],
      selectedVideo: null
    });
  });

  it('should handle REMOVE_SELECTED_VIDEO from an existing state', () => {
    const stateBefore = {
      videos: ['video1'],
      selectedVideo: 'video0'
    };
    const action = {
      type: constants.ACTIONS.REMOVE_SELECTED_VIDEO
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      videoReducer(stateBefore, action)
    ).toEqual({
      videos: ['video1'],
      selectedVideo: null
    });
  });
})