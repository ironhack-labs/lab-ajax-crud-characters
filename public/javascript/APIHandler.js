// json-server --watch db.json --port 8000
class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }
  // axios.defaults.baseURL = this.BASE_URL;
  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister(data) {
    return axios.post(`${this.BASE_URL}/characters`, data)
  }

  updateOneRegister(id, data) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, data)
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
