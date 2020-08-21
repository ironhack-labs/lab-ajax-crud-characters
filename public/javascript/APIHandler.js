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

  createOneRegister(newCharInfo) {
    return axios.post(`${this.BASE_URL}/characters}`, newCharInfo);
  }

  updateOneRegister(id, updatedCharInfo) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, updatedCharInfo);
  }

  deleteOneRegister() {
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
