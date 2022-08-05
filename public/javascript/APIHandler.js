
/* const axios = require('axios'); */

class APIHandler {
  constructor (charactersAPI) {
    this.charactersAPI = charactersAPI;
    this.api = axios.create({
      baseURL: this.charactersAPI,
      /* this is a property that comes with axios, so we
      don't have to specify the basic url everytime, we
      just write this.api */
    });

    /* this is part of the constructor syntax */
  }

  getFullList () {
    return this.api.get('/characters');

  }

  getOneRegister (id) {
    return this.api.get(`/characters/${id}`);

  }

  createOneRegister (character) {
    return this.api.post(`/characters`, character);
  }

  updateOneRegister (id, updatedInfo) {
    return this.api.put(`/characters/${id}`, updatedInfo);
  }

  deleteOneRegister (id) {
    return this.api.delete(`/characters/${id}`);
  }
}

/* module.exports = APIHandler; */
