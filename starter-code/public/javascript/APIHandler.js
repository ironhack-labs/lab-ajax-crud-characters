class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + "/characters")
    .then(characterFullList =>{
      return characterFullList.data
    })
  }

  getOneRegister (id) {
    return axios
    .get(this.BASE_URL + "/characters/" + id)
    .then(character =>{
      return character.data
     
    })

  }

  createOneRegister () {
    return axios.post(this.BASE_URL + "/characters/")
    .then(newCharacter =>{
      return newCharacter
      //document.querySelector(#send-data)
    })
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
