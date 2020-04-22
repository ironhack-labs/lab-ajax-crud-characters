class APIHandler {
  constructor(baseUrl) {
    this.service = axios.create({
      baseURL: baseUrl,
    });
  }

  getFullList() {
    return this.service.get('/characters');
  }

  getOneRegister(id) {
    return this.service.get(`/characters/${id}`);
  }

  createOneRegister(character) {
    return this.service.post('/characters', character);
  }

  updateOneRegister(id, character) {
    return this.service.patch(`/characters/${id}`, character);
  }

  deleteOneRegister(id) {
    return this.service.delete(`/characters/${id}`);
  }
}