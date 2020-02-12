

class APIHandler {
  constructor(baseUrl) {
    this.axios = axios.create({ baseURL: `${baseUrl}` })
  }

  getFullList() {
    return this.axios.get('/characters')
      .then(response => response.data)

  }

  getOneRegister() {

  }

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
