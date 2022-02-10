class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister (characterId) {
    return axios.get(`${this.BASE_URL}/${characterId}`);
  }

  createOneRegister (characterObj) {
    return axios.post(`${this.BASE_URL}/characters`, characterObj);
  }

  updateOneRegister (characterId, characterObj) {
    return axios.patch(`${this.BASE_URL}/${characterId}`, characterObj);
  }

  deleteOneRegister () {
    return axios.delete(`${this.BASE_URL}/characters/${characterId}`);
  }
}
