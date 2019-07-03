class APIHandler {
  constructor(baseUrl) {
      this.BASE_URL = baseUrl;
  }

  getFullList() {
      return axios.get(this.BASE_URL)

  }

  getOneRegister(id) {
      return axios.get(this.BASE_URL + `/${id}`)

  }

  createOneRegister(valor) {
      return axios.post(this.BASE_URL, valor)
  }

  updateOneRegister(id, valor) {
      return axios.patch(this.BASE_URL + `/${id}`, valor)
  }

  deleteOneRegister(id) {
      return axios.delete(this.BASE_URL + `/${id}`)
  }
}