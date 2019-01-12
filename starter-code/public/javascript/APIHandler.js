class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + '/characters')
  }

  getOneRegister(characterID) {
    return axios.get(this.BASE_URL + '/characters/:' + characterID)
  }

  createOneRegister() {
    return axios.post(this.BASE_URL + '/characters')
  }

  updateOneRegister() {
    return axios.post(this.BASE_URL + '/characters/:id')
  }

  deleteOneRegister(characterID) {
    return axios.post(this.BASE_URL + '/characters/:' + characterID)
  }
}
