import axios from 'axios';

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // Get all characters
  async getFullList() {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters`);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  // Get a single character by ID
  async getOneRegister(id) {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  // Create a new character
  async createOneRegister(data) {
    try {
      const response = await axios.post(`${this.BASE_URL}/characters`, data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  // Update a character by ID
  async updateOneRegister(id, data) {
    try {
      const response = await axios.put(`${this.BASE_URL}/characters/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  // Delete a character by ID
  async deleteOneRegister(id) {
    try {
      const response = await axios.delete(`${this.BASE_URL}/characters/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}

export default APIHandler;

