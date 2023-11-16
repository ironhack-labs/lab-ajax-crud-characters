const axios = require('axios');


class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(response => response.data)
      .catch(error => console.error('Error fetching all characters:', error));
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(response => response.data)
      .catch(error => console.error(`Error fetching character with ID ${id}:`, error));
  }

  createOneRegister(characterData) {
    return axios.post(`${this.BASE_URL}/characters`, characterData)
      .then(response => response.data)
      .catch(error => console.error('Error creating character:', error));
  }

  updateOneRegister(id, updatedData) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`, updatedData)
      .then(response => response.data)
      .catch(error => console.error(`Error updating character with ID ${id}:`, error));
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(() => console.log(`Character with ID ${id} deleted successfully`))
      .catch(error => console.error(`Error deleting character with ID ${id}:`, error));
  }
}

module.exports = APIHandler;
