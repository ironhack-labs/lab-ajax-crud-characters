class APIHandler {
  constructor (baseUrl) {
    this.service = axios.create({
      baseURL: baseUrl
    })
  }

  getFullList () {
return this.service.get("/characters")
  }

  getOneRegister () {
    return this.service.get("/characters/" + id)
  }

  createOneRegister () {
    return this.service.post("/characters/", data)
  }

  updateOneRegister () {
    return this.service.patch("/characters/" + id, data)
  }

  deleteOneRegister () {
    return this.service.delete("/characters/" +id)
  }
}
