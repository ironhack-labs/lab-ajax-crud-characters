class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister(characterID) {
    return axios.get(`${this.BASE_URL}/characters/${characterID}`);
  }

  createOneRegister(characterInfo) {
    return axios.post(`${this.BASE_URL}/characters`, characterInfo);
  }

  updateOneRegister(characterID, updatedCharacter) {
    return axios.patch(`${this.BASE_URL}/characters/${characterID}`, updatedCharacter);
  }

  deleteOneRegister(characterID) {
    return axios.delete(`${this.BASE_URL}/characters/${characterID}`);
  }
}
