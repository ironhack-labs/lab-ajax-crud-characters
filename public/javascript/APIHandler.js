class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL + `characters/`)
      .then(characters => console.log(characters.data))
      .catch(err => console.error(err))
  }

  getOneRegister (id) {
    axios.get(this.BASE_URL + `characters/${id}`)
      .then(character => console.log(character.data))
      .catch(err => console.error(err))
  }

  createOneRegister (form) {
    axios.post(this.BASE_URL + `characters/`)
      .then(character => console.log(character))
      .catch(err => console.error(err))
  }

  updateOneRegister () {

  }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL + `characters/${id}`)
      .then(() => console.log(id))
      .catch(err => console.error(err))
  }
}
