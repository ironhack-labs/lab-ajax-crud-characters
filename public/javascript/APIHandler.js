class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
      .get(`${this.BASE_URL}/characters`)
  }

  getOneRegister () {
    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        console.log(response)
      })
      .catch(err => err)
  }

  createOneRegister (newCharacterInfo) {
    // const newCharacterInfo = { name, occupation, weapon, cartoon }

    axios
      .post(`${this.BASE_URL}/characters`, newCharacterInfo)
      .then(response => {
        console.log(response)
      })
      .catch(err => err)

  }

  updateOneRegister (updatedCharacter) {
  
    axios
      .patch(`${this.BASE_URL}/characters/${id}`, updatedCharacter)
      .then(response => {
        console.log(response)
      })
      .catch(err => err)

  }

  deleteOneRegister () {
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
  }
}
