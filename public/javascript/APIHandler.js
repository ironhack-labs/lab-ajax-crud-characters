class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({baseURL: baseUrl});

  }

  getFullList () {
    return this.api.get('/characters')
  }

  getOneRegister (id) {
    return this.api.get(`/characters/${id}`)
  }

  createOneRegister ( register ) {
    return this.api.post('/characters', register)

  }

  updateOneRegister (id, register) {
    return this.api.patch(`/characters/${id}`, register)
  }

  deleteOneRegister (id) {
    return this.api.delete(`/characters/${id}`)
  }
}
