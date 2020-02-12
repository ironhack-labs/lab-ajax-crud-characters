class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({
      baseURL: this.BASE_URL
    })
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)

  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)

  }

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)

  }
}