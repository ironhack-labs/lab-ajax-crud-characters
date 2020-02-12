class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({ baseURL: this.BASE_URL })
  }

  getFullList() {
    this.axiosApp.get('/characters')
      .then(arrCharacters => {
        const character = arrCharacters.data

        console.log(arrCharacters)
      })
      .catch(err => console.log("Hay un error en getFullList", err))
  }

  getOneRegister() {
    this.axiosApp.get('/characters/:id')
  }

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
