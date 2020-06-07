class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then(characters => characters)
    .catch(error => console.log(error))
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(character => character)
    .catch(error => console.log(error))
  }

  createOneRegister (obj) {
    return axios.post(`${this.BASE_URL}/characters`, obj)
    .then()
    .catch(error => console.log(error))
  }

  updateOneRegister (id, obj) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, obj)
    .then(character => character)
    .catch(error => console.log(error))
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(character => character)
    .catch(error => console.log(error))
  }
}
