import axios from 'axios';

// Instance axios dengan konfigurasi dasar
const apiClient = axios.create({
  baseURL: "https://test-fe.mysellerpintar.com/api",  // URL dasar API
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
