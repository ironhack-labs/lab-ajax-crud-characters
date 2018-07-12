class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
  return axios.get(`${this.BASE_URL}/characters`)
  .then (character => character.data)
 

  }

  getOneRegister (id) {
  return axios.get(`${this.BASE_URL}/characters/${id}`)
  .then (res => res.data)
  }

  createOneRegister (character) {
    return axios.post(`${this.BASE_URL}/characters/${id}`, character)
    .then (res => res.data)

  }

  updateOneRegister (id, character) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`, character)
    .then (res => res.data)
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`, character)
    .then (res => res.data)

  }
}
