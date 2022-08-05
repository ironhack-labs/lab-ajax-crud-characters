class APIHandler {
  constructor (baseUrl) {
    this.charactersAPI = charactersAPI
    this.api = axios.create({
      baseUrl: this.charactersAPI
    })
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
