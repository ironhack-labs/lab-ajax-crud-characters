class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`http://localhost:8000/characters`)
  }

  getOneRegister (id) {
    return axios.get(`http://localhost:8000/characters/${id}`)
  }

  createOneRegister (newCharacter) {
    return axios.post(`http://localhost:8000/characters`, newCharacter)
  }

  updateOneRegister (id, updatedCharacter) {
    return axios.put(`http://localhost:8000/characters/${id}`, updatedCharacter)

  }

  deleteOneRegister (id) {
    return axios.delete(`http://localhost:8000/characters/${id}`)
  }
}
