import apiClient from "./base.url";

const api = {
  // Fungsi GET untuk mengambil data, dengan params opsional
  get: async (endpoint: string, params: { [key: string]: any } = {}) => {
    try {
      const response = await apiClient.get(endpoint, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Fungsi POST untuk mengirimkan data
  post: async (endpoint: string, data: any) => {
    try {
      const response = await apiClient.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Fungsi PUT untuk memperbarui data
  put: async (endpoint: string, data: any) => {
    try {
      const response = await apiClient.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Fungsi DELETE untuk menghapus data
  delete: async (endpoint: string) => {
    try {
      const response = await apiClient.delete(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;
