import axios from 'axios';

// API base URL
const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

// Auth related API calls
export const authService = {
  // Login API call
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  },

  // Registration API call
  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  },

  // Get current user API call
  getCurrentUser: async () => {
    try {
      const response = await api.get('/auth/me');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to fetch user data");
    }
  },

  // Forgot password API call
  forgotPassword: async (email) => {
    try {
      const response = await api.post('/auth/forgot-password', { email });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Password reset request failed");
    }
  },

  // Reset password API call
  resetPassword: async (token, newPassword) => {
    try {
      const response = await api.post('/auth/reset-password', { token, newPassword });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Password reset failed");
    }
  },

  // Refresh token API call
  refreshToken: async (token) => {
    try {
      const response = await api.post('/auth/refresh-token', { token });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Token refresh failed");
    }
  }
};