const axios = require('axios');

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return this.BASE_URL.get('/characters');
  }

  getOneRegister () {
    return this.BASE_URL.get(`/characters/${characterId}`);
  }

  createOneRegister () {
    return this.BASE_URL.post(`/characters`, characterInfo)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error.response.data);
    });
  };

  updateOneRegister () {
    return this.BASE_URL.put(`/characters/${characterId}`, characterInfo)
    .then(() => {
      console.log('Character has been successfully updated');
    })
    .catch((error) => {
      console.error(`Character not found ${id}:`, error);
    });
  }

  deleteOneRegister () {
    return this.BASE_URL.delete(`/characters/${characterId}`)
    .then(() => {
      console.log('Character has been successfully deleted');
    })
    .catch((error) => {
      console.error(`Character not found ${id}:`, error);
    });
  }
}
module.exports = APIHandler;