// src/config/axiosConfig.js
import axios from 'axios';

// 1. Create configured instance
const axiosInstance = axios.create({
  baseURL: "https://8d329b00c94e.ngrok-free.app",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true' // If using ngrok
  }
});

// 2. Add interceptors and checks them before they are sent to the server
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// 3. Export the instance
export default axiosInstance;