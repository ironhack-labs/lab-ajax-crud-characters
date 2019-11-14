class APIHandler {
  constructor (baseUrl) {
    this.service=axios.create({
      baseURL: baseUrl
    })    
  }

  getFullList () {
   return this.service.get("/characters")
  }

  getOneRegister (id) {
    return this.service.get(`/characters/${id}`)
  }

  createOneRegister (data) {
    return this.service.post(`/characters/`,data)
  }

  updateOneRegister (data) {
    return this.service.patch(`/characters/${data.id}`, data)
  }

  deleteOneRegister (id) {
    return this.service.delete(`/characters/${id}`)
  }
}
