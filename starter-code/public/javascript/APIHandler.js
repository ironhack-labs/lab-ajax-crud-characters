class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL)
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/${id}`)
  }

  createOneRegister (character) {
    return axios.post(this.BASE_URL, character)
  }

  updateOneRegister (id, updatedCharacter) {
    return axios.patch(`${this.BASE_URL}/${id}`, updatedCharacter)
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/${id}`)
  }
}
