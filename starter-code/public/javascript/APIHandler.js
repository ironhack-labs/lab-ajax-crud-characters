class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(allCharacters => allCharacters.data)
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(theCharacter => {
        console.log(theCharacter)
        return theCharacter.data
      })
  }

  createOneRegister(character) {
    return axios.post(`${this.BASE_URL}/characters`, character)


  }

  updateOneRegister(id, updateCharacter) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, updateCharacter)

  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`, id)

  }
}
