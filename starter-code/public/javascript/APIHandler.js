class APIHandler {
  constructor(baseUrl) {
      this.BASE_URL = axios.create({
        baseURL: baseUrl
      });
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

  deleteOneRegister() {

  }
}