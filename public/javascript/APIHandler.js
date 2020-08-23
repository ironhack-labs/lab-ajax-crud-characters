class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
      .then((charactersFromAPI) => {console.log(charactersFromAPI)})
      .catch((err) => console.log(err))
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
      .then((characterFromAPI) => {console.log(characterFromAPI)})
      .catch((err) => console.log(err))
  }

  createOneRegister (newCharacterData) {
    axios.post(`${this.BASE_URL}/characters`, newCharacterData)
      .then((newCharacter) => {console.log(newCharacter)})
      .catch((err) => console.log(err))
  }

  updateOneRegister (updatedCharacterData) {
    axios.put(`${this.BASE_URL}/characters/${updatedCharacterData.id}`, updatedCharacterData)
      .then((updatedCharacter) => {console.log(updatedCharacter)})
      .catch((err) => console.log(err))
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then((deletedCharacter) => {console.log(deletedCharacter)})
      .catch((err) => console.log(err))
  }
}
