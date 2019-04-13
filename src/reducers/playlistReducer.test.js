import constants from '../common/constants';
import playlistReducer from './playlistReducer';
import deepFreeze from 'deep-freeze';

describe('playlist reducer', () => {
  it('should handle initial state', () => {
    expect(
      playlistReducer(undefined, { })
    ).toEqual({
      playlists: [],
      isAddingPlaylist: false,
      isLoading: false
    });
  });

  it('should handle REQUEST_FETCH_PLAYLISTS from an empty state', () => {
    const stateBefore = {
      playlists: [],
      isAddingPlaylist: false,
      isLoading: false
    };
    const action = {
      type: constants.ACTIONS.REQUEST_FETCH_PLAYLISTS
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      playlistReducer(stateBefore, action)
    ).toEqual({
      playlists: [],
      isAddingPlaylist: false,
      isLoading: true
    });
  });

  it('should handle FETCH_PLAYLISTS from an empty state', () => {
    const stateBefore = {
      playlists: [],
      isAddingPlaylist: false,
      isLoading: false
    };
    const action = {
      type: constants.ACTIONS.FETCH_PLAYLISTS,
      payload: ["Playlist1", "Playlist2"]
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      playlistReducer(stateBefore, action)
    ).toEqual({
      playlists: ["Playlist1", "Playlist2"],
      isAddingPlaylist: false,
      isLoading: false
    });
  });

  it('should handle FETCH_PLAYLISTS from an existing state', () => {
    const stateBefore = {
      playlists: ["Playlist0"],
      isAddingPlaylist: false,
      isLoading: true
    };
    const action = {
      type: constants.ACTIONS.FETCH_PLAYLISTS,
      payload: ["Playlist1", "Playlist2"]
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      playlistReducer(stateBefore, action)
    ).toEqual({
      playlists: ["Playlist1", "Playlist2"],
      isAddingPlaylist: false,
      isLoading: false
    });    
  });

  it('should handle CREATE_PLAYLIST from an empty state', () => {
    const stateBefore = {
      playlists: [],
      isAddingPlaylist: false,
      isLoading: false
    };
    const action = {
      type: constants.ACTIONS.CREATE_PLAYLIST,
      payload: "Playlist1"
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      playlistReducer(stateBefore, action)
    ).toEqual({
      playlists: ["Playlist1"],
      isAddingPlaylist: false,
      isLoading: false
    });
  });

  it('should handle CREATE_PLAYLIST from an existing state', () => {
    const stateBefore = {
      playlists: ["Playlist0", "Playlist1"],
      isAddingPlaylist: false,
      isLoading: true
    };
    const action = {
      type: constants.ACTIONS.CREATE_PLAYLIST,
      payload: "Playlist2"
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      playlistReducer(stateBefore, action)
    ).toEqual({
      playlists: ["Playlist0", "Playlist1", "Playlist2"],
      isAddingPlaylist: false,
      isLoading: false
    });
  });

  it('should handle REMOVE_PLAYLIST from an existing state', () => {
    const stateBefore = {
      playlists: [{ id: 1 }, { id: 2 }, { id: 3 }],
      isAddingPlaylist: false,
      isLoading: false
    };
    const action = {
      type: constants.ACTIONS.REMOVE_PLAYLIST,
      payload: 1
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      playlistReducer(stateBefore, action)
    ).toEqual({
      playlists: [{ id: 2 }, { id: 3 }],
      isAddingPlaylist: false,
      isLoading: false
    });
  });

  it('should handle REMOVE_PLAYLIST from an existing state when the id does not exist', () => {
    const stateBefore = {
      playlists: [{ id: 1 }, { id: 2 }, { id: 3 }],
      isAddingPlaylist: false,
      isLoading: false
    };
    const action = {
      type: constants.ACTIONS.REMOVE_PLAYLIST,
      payload: 0
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      playlistReducer(stateBefore, action)
    ).toEqual({
      playlists: [{ id: 1 }, { id: 2 }, { id: 3 }],
      isAddingPlaylist: false,
      isLoading: false
    });
  });

  it('should handle ADD_VIDEO_TO_PLAYLIST/REMOVE_VIDEO_FROM_PLAYLIST from an existing state', () => {
    const stateBefore = {
      playlists: [{ id: 1 }, { id: 2 }],
      isAddingPlaylist: false,
      isLoading: false
    };
    const action = {
      type: constants.ACTIONS.ADD_VIDEO_TO_PLAYLIST,
      payload: { id: 1, state: "changed" }
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      playlistReducer(stateBefore, action)
    ).toEqual({
      playlists: [{ id: 1, state: "changed" }, { id: 2 }],
      isAddingPlaylist: false,
      isLoading: false
    });
  });

  it('should handle CLEAN_PLAYLISTS from an existing state', () => {
    const stateBefore = {
      playlists: [{ id: 1 }, { id: 2 }],
      isAddingPlaylist: true,
      isLoading: true
    };
    const action = {
      type: constants.ACTIONS.CLEAN_PLAYLISTS
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      playlistReducer(stateBefore, action)
    ).toEqual({
      playlists: [],
      isAddingPlaylist: false,
      isLoading: false
    });
  });

  it('should handle ADDING_PLAYLIST from an existing state', () => {
    const stateBefore = {
      playlists: [{ id: 1 }, { id: 2 }],
      isAddingPlaylist: false,
      isLoading: false
    };
    const action = {
      type: constants.ACTIONS.ADDING_PLAYLIST
    };
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      playlistReducer(stateBefore, action)
    ).toEqual({
      playlists: [{ id: 1 }, { id: 2 }],
      isAddingPlaylist: true,
      isLoading: false
    });
  });
})