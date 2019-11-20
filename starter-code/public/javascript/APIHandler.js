class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then(payload => payload.data)
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(payload => payload.data)
  }

  createOneRegister (character) {
    axios.post(`${this.BASE_URL}/characters`, character)
    .then(() => console.log("Character Created"))
    .catch(error => console.log(error));
  }

  updateOneRegister (character) {
    axios.put(`${this.BASE_URL}/characters/${character.id}`, character)
    .then(() => console.log("Character Updated"))
    .catch(error => console.log(error));
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
