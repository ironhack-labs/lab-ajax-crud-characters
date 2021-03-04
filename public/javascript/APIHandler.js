class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + "/characters")
  }

  getOneRegister() {
    return axios.get(this.BASE_URL + "/characters/:id")
  }

  createOneRegister() {
    return axios.post(this.BASE_URL + "/characters")
  }

  updateOneRegister() {
    return axios.patch(this.BASE_URL + "/characters/:id")

  }

  deleteOneRegister() {
    return axios.delete(this.BASE_URL + "/characters/:id")
  }
}
