class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(`${this.BASE_URL}/characters`).then(characters => {
      return characters.data
    })
      .catch(error => {
        console.log('ERRRORRRR', error)
      })
  }

  getOneRegister(id) {
    axios.get(`${this.BASE_URL}/characters/${id}`).then(characters => {
      console.log(characters.data)
    })
      .catch(error => {
        console.log('ERRRORRRR', error)
      })
  }

  createOneRegister(all) {
    axios.post(`${this.BASE_URL}/characters`, all)
      .then(characters => {
        console.log(characters.data)
        return characters.data
      })
      .catch(error => {
        console.log('ERRRORRRR', error)
      })
  }

  updateOneRegister(id, all) {
    axios.patch(`${this.BASE_URL}/characters/${id}`, all).then().catch(err => console.error(err))
  }

  deleteOneRegister(id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
