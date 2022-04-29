 class APIHandler {
  constructor (baseUrl) {
    this.API = axios.create({
      baseURL:"http://localhost:8000"
    })
    
  }

  getFullList () {
    return this.API.get("/characters")
  }

  getOneRegister (id) {
    return this.API.get(`/characters/${id}`)
  }

  createOneRegister (character) {
    return this.API.post("/characters",character)
  }

  updateOneRegister (character) {
    return this.API.put(`/characters/${character.id}`,character)
  }

  deleteOneRegister (id) {
    return this.API.delete(`/characters/${id}`)
  }
}

