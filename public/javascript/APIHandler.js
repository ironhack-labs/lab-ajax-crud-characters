class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(allCharacters => allCharacters)
      .catch(err => console.log(err))
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(oneCharacters => oneCharacters)
      .catch(err => console.log(err))
  }

  createOneRegister(obj) {
    return axios.post(`${this.BASE_URL}/characters`,obj)
      .then(character => console.log(character.data))
      .catch(err => console.log(err))
  }

  updateOneRegister(id,obj) {
    return axios.put(`${this.BASE_URL}/characters/${id}`,obj)
      .then()
      .catch(err => console.log(err))
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(data => console.log("borrado! data:", data))
      .catch(err => console.log(err))
  }
}
