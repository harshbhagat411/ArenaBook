import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/auth';

/**
 * Register a new user
 * @param {Object} userData - User registration data (name, email, password)
 * @returns {Promise<Object>} The API response data
 */
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/register`, userData);
  return response.data;
};

/**
 * Login user
 * @param {Object} credentials - User credentials containing email and password
 * @returns {Promise<Object>} The API response data
 */
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/login`, credentials);
  return response.data;
};
