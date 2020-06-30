class APIHandler {
  constructor(baseUrl) {
    this.axiosApp = axios.create({
      baseUrl
    })
  }

  getFullList() {
    this.axiosApp.get(`${baseUrl}/characters`)
      .then(charactersAPI.printAll())
      .catch(err => console.log(err))
  }

  getOneRegister() {
    this.axiosApp.get(`${baseUrl}/characters/:id`)
  }

  createOneRegister() {
    this.axiosApp.get(`${baseUrl}/characters`)
  }

  updateOneRegister() {
    this.axiosApp.get(`${baseUrl}/characters/:id`)
  }

  deleteOneRegister() {
    this.axiosApp.get(`${baseUrl}/characters/:id`)
  }
}