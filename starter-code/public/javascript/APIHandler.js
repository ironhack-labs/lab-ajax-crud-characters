class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister(newCharacter) {
    return axios.post(`${this.BASE_URL}/characters`, newCharacter)
  }

  updateOneRegister(characterInfo) {
    return axios.put(`${this.BASE_URL}/characters/${characterId}`, characterInfo)
  }

  deleteOneRegister(characterId) {
    return axios.delete(`${this.BASE_URL}/characters/${characterId}`)
  }
}