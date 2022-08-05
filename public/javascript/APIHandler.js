

class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({
    this.BASE_URL = baseUrl
  }
  )}
  getFullList () {
    return this.api.get('/characters');
  
  };

  getOneRegister (id) {
    return this.api.get(`/characters/${Id}`);
  };

  createOneRegister (character) {
    return this.api.post(`/characters`, character);
  };

  updateOneRegister (Id, updateRegister) {
    return this.api.put(`/characters/${Id}`, updateRegister);
  };

  deleteOneRegister (Id) {
    return this.api.put(`/characters/${characterId}`);
  };
}

