const axios = require('axios');
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters`);
      console.log('Full list', response.data);
      return response.data;
    } catch(error){
      console.error('Error while fetching full list', error)
    }
  }

  async getOneRegister (id) {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters/${id}`);
      console.log('Single Character', response.data);
      return response.data;
    } catch(error) {
      console.error('Error while fetching single character', error)
    }
  }

  async createOneRegister (characterData) {
    try {
      const response = await axios.post(`${this.BASE_URL}/characters`, characterData);
      console.log('Character Created', response.data);
      return response.data;
    }catch (error){
      console.error('Error while creating character', error);
      return { error: error.response.data}
    }

  }

  async updateOneRegister(id, characterData) {
    try {
      const response = await axios.patch(`${this.BASE_URL}/characters/${id}`, characterData);
      console.log('Character Updated:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error while updating character:', error);
      return { error: error.response ? error.response.data : 'Unknown error' };
    }
  }

  async deleteOneRegister (id) {
    try {
      const response = await axios.delete(`${this.BASE_URL}/characters/${id}`);
      console.log('Character Deleted:', response.data);
      return response.data;
    } 
    catch (error) {
      console.error('Error while deleting character:', error);
      return { error: error.response ? error.response.data : 'Unknown error' };
    }
  }
}

module.exports = APIHandler;
