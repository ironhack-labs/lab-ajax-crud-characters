
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (n) {
    return axios.get(`${this.BASE_URL}/characters/${n}`)
  }

  createOneRegister (character) {
    return axios.post(`${this.BASE_URL}/characters`, character)
  }

  updateOneRegister (n, character) {
    return axios.patch(`${this.BASE_URL}/characters/${n}`, character)
  }

  deleteOneRegister (n) {
    return axios.delete(`${this.BASE_URL}/characters/${n}`)
  }
}
