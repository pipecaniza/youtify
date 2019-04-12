export const getVideos = (state) => state.videos.videos;

export const getSelectedVideoId = (state) => state.videos.selectedVideo;

export const getIsSignIn = (state) => state.auth.isSignedIn;

export const getPlaylists = (state) => state.playlists.playlists;

export const getSearchTermFromUrl = (props) => props.match.params.searchTerm

export const getPlaylistFromUrl = (props) => props.match.params.name