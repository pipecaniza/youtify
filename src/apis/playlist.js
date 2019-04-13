import axios from 'axios';
import constants from '../common/constants';

const API_URL = process.env.NODE_ENV !== 'production' ? constants.BACKEND_URL_DEV : constants.BACKEND_URL;

export const getPlaylists = async (userId) => {   
  return await axios.get(`${API_URL}/playlists?userId=${userId}`);
};

export const postPlaylist = async (playlist) => {  
  return await axios.post(`${API_URL}/playlists/`, playlist);
};

export const deletePlaylist = async (id) => {
  return await axios.delete(`${API_URL}/playlists/${id}`);
};

export const patchPlaylist = async (playlistId, playlist) => {
  return await axios.put(`${API_URL}/playlists/${playlistId}`, playlist);
};