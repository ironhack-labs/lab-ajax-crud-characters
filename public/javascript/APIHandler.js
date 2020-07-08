class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}` + "/characters");
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`);
  }

  createOneRegister(body) {
    return axios.post(`${this.BASE_URL}/characters/`, body);
  }

  updateOneRegister(id, body) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`, body);
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
