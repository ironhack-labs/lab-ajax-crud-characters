class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axios = axios;
  }

  getFullList() {
    return axios.get(this.BASE_URL);
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/${id}`);
  }

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister(id) {
    return axios.get(`${this.BASE_URL}/${id}`)
  }
}
