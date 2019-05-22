class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(allCharacters=>allCharacters.data)
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(theCharacter=>{
      console.log(theCharacter.data)
      return theCharacter.data
      
    })
  }

  createOneRegister (character) {
    return axios.post(`${this.BASE_URL}/characters`, character)
  }

  updateOneRegister (id, updateChar) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, updateChar)
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`, id)
  }
}
