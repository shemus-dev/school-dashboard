import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://51e7f1b18edd.ngrok-free.app",
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true'
  }
});

// Enhanced Token Manager
const TokenManager = {
  getToken: () => {
    try {
      return localStorage.getItem('authToken');
    } catch (error) {
      console.warn('Token retrieval failed:', error);
      return null;
    }
  },
  
  setToken: (token) => {
    try {
      if (token) {
        localStorage.setItem('authToken', token);
      }
    } catch (error) {
      console.error('Token storage failed:', error);
    }
  },
  
  clearAuthData: () => {
    try {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userInfo');
      console.log('Previous session cleared');
    } catch (error) {
      console.warn('Session cleanup failed:', error);
    }
  },
  
  hasValidToken: () => {
    const token = TokenManager.getToken();
    return !!token?.trim();
  }
};

// Request interceptor - ALWAYS adds token if available
axiosInstance.interceptors.request.use(config => {
  const token = TokenManager.getToken();
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    // Clear any residual auth data if token is missing
    TokenManager.clearAuthData();
  }
  
  return config;
}, error => {
  console.error('Request setup error:', error.message);
  return Promise.reject('Network request failed. Please check your connection');
});

// Enhanced response interceptor
axiosInstance.interceptors.response.use(response => {
  // Update token if new one is provided
  if (response.data?.token) {
    TokenManager.setToken(response.data.token);
  }
  return response;
}, error => {
  const { response, config } = error;
  
  // Handle token expiration or invalid tokens
  if (response?.status === 401) {
    TokenManager.clearAuthData();
    return Promise.reject('Session expired. Please log in again');
  }
  
  // Enhanced error messaging
  let errorMessage = 'Request failed';
  
  if (response) {
    // Server responded with error status
    errorMessage = response.data?.error?.message || 
                  response.data?.message || 
                  `Server error (${response.status})`;
  } else if (error.code === 'ECONNABORTED') {
    errorMessage = 'Request timed out. Please try again';
  } else if (error.message === 'Network Error') {
    errorMessage = 'Network connection failed. Check your internet';
  }
  
  console.error(`API Error: ${errorMessage}`);
  return Promise.reject(errorMessage);
});

export default axiosInstance;