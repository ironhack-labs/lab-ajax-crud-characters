class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister(characterId) {
    return axios.get(`${this.BASE_URL}/characters/${characterId}`);
  }

  createOneRegister(newCharacter) {
    return axios.post(`${this.BASE_URL}/characters`, newCharacter);
  }

  updateOneRegister(characterId) {
    return axios.put(`${this.BASE_URL}/characters/${characterId}`);
  }

  deleteOneRegister(characterId) {
    return axios.delete(`${this.BASE_URL}/characters/${characterId}`);
  }
}
