class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`);
  }

  createOneRegister (obj) {
    return axios.post(`${this.BASE_URL}/characters`, obj);
  }

  updateOneRegister (id, obj) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, obj);
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
