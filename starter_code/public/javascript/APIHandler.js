class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`);
  }

  createOneRegister(newChar) {
    return axios.post(`${this.BASE_URL}/characters`,newChar);
  }

  updateOneRegister(id, update) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, update);
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
