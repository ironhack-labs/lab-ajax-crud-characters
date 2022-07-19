class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: baseUrl
    });
  }

  getFullList () {
    return this.api.get("/characters")
    .then(informacion => {
      return informacion.data
    }).catch(console.log)
  }

  getOneRegister (id) {
    return this.api.get(`/characters/${id}`)
    .then(informacion => {
      return informacion.data
    }).catch(console.log)
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
