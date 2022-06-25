  class APIHandler {
   constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  } 

  getFullList () {
    return this.api.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister (characterId) {
    return this.api.get(`${this.BASE_URL}/characters/${characterId}`);
  }

  createOneRegister (characterInfo) {
    return this.api.post(`${this.BASE_URL}/characters`, characterInfo);
  }

  updateOneRegister (characterId, characterInfo) {
    return this.api.put(`${this.BASE_URL}/characters/${characterId}`, characterInfo);
  }

  deleteOneRegister (characterId) {
    return this.api.delete(`${this.BASE_URL}/characters/${characterId}`);
  }
}

