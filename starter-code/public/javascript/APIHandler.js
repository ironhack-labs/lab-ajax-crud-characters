class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL);
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/${id}`);
  }

  createOneRegister(newCharacter) {
    return axios.post(`${this.BASE_URL}`, newCharacter);
  }

  updateOneRegister(id, editCharacter) {
    return axios.patch(`${this.BASE_URL}/${id}`, editCharacter);
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/${id}`);
  }
}
