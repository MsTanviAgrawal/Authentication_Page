import axios from 'axios';

// const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const instance = axios.create({
  baseURL: API_BASE,
});

export const setAuthToken = token => {
  if (token) instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete instance.defaults.headers.common['Authorization'];
};

export default instance;

