import axios from 'axios';

export const getPlaylists = async (userId) => {
  return await axios.get(`http://localhost:3001/playlists?userId=${userId}`);
};

export const postPlaylist = async (playlist) => {
  return await axios.post(`http://localhost:3001/playlists/`, playlist);
};

export const deletePlaylist = async (id) => {
  return await axios.delete(`http://localhost:3001/playlists/${id}`);
};

export const patchPlaylist = async (playlistId, playlist) => {
  return await axios.put(`http://localhost:3001/playlists/${playlistId}`, playlist);
};