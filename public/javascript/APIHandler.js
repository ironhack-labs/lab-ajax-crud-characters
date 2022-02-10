class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister () {
    return axios.get(`${this.BASE_URL}/${characterId}`);
  }

  createOneRegister () {
    return axios.post(`${this.BASE_URL}/characters`, characterObj);
  }

  updateOneRegister () {
    return axios.patch(`${this.BASE_URL}/${characterId}`, characterObj);
  }

  deleteOneRegister () {
    return axios.delete(`${this.BASE_URL}/characters/${characterId}`);
  }
}
