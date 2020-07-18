class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + `characters/`)
      .then(characters => characters.data)
      .catch(err => console.error(err))
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + `characters/${id}`)
      .then(character => character.data)
      .catch(err => console.error(err))
  }

  createOneRegister (newChar) {
    return axios.post(this.BASE_URL + `characters/`, newChar)
      .then(success => success)
      .catch(err => err)
  }

  updateOneRegister (modChar) {
    return axios.patch(this.BASE_URL + `characters/${modChar.id}`, modChar)
    .then(success => success)
    .catch(err => err)
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + `characters/${id}`)
      .then(success => success)
      .catch(err => err)
  }
}
