class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.handler = axios.create({
      baseUrl: baseUrl
    });
  }

  getFullList () {
    return this.handler.get(`/characters`)
  }

  getOneRegister (id) {
    return this.handler.get(`/characters/${id}`)
  }

  createOneRegister (character) {
    return this.handler.post(`/characters`, character)
  }

  updateOneRegister (character) {
    return this.handler.put(`/characters/${character.id}`, character)
  }

  deleteOneRegister (id) {
    return this.handler.delete(`/characters/${id}`)
  }
}

export default APIHandler
