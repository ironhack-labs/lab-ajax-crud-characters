class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then( res => res.data)
      .catch( err => console.log(err))
  }

  getOneRegister (charID) {
    return axios
      .get(`${this.BASE_URL}/characters`,  {params: {id: charID}})
      .then( res => res.data)
      .catch( err => console.log(err))
  }

  createOneRegister (character) {
    return axios
      .post(`${this.BASE_URL}/characters`, character)
      .then( res => res.data)
      .catch( err => console.log(err))

  }

  updateOneRegister (charID, character) {
    return axios
      .patch(`${this.BASE_URL}/characters/${charID}`, character)
      .then( res => res.data)
      .catch( err => console.log("Character not found"))

  }

  deleteOneRegister (charID) {
    return axios
      .delete(`${this.BASE_URL}/characters/${charID}`)
      .then( () => "Character has been successfully deleted")
      .catch( () => "Character not found")
  }
}
