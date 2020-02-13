class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({ baseUrl: this.BASE_URL})
  }

  getFullList () {
    this.axiosApp.get("https://minions-api.herokuapp.com/characters")
    .then(allMinions => {
      
      
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
