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
    const data = axios.post(`${this.BASE_URL}/characters`, newCharacter)
    return data
  }

  updateOneRegister(id, updateCharacter) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`, updateCharacter)
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}

const testingAPI = new APIHandler('local')
