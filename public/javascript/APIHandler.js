class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({baseURL: this.BASE_URL});
  }

  getFullList () {
    return this.api.get("/characters")
  }

  getOneRegister (resgisterId) {
    return this.api.get("/characters/${resgisterId}")
  }

  createOneRegister (registerInfo) {
    return this.api.post("/characters", registerInfo)
  }

  updateOneRegister (resgisterId, registerInfo) {
    return this.api.put("/characters/${registerId}", registerInfo)
  }

  deleteOneRegister () {
    return this.api.delete("/characters/${registerId}", registerInfo)
  }
}
