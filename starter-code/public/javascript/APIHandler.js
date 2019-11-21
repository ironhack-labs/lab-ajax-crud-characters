class APIHandler {
  constructor (baseUrl) {
    this.CharactersUrl = axios.create(
      {
        baseURL: baseUrl
      }
    )
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
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
