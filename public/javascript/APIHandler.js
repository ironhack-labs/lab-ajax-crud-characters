class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl
    axios.defaults.baseURL = this.BASE_URL
    
   
  }

  getFullList () {
    axios.get(`/characters`)
    .then((charactersList) => {
      console.log(charactersList)
    })
  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
