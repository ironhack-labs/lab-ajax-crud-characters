class APIHandler {
  constructor(url) {
    this.url = url;
    this.handler = axios.create({
      baseURL: this.url
    });
  }

  getFullList() {
    return this.handler.get(`/characters`)
  }

  getOneRegister(id) {
    return this.handler.get(`/characters/${id}`)
  }

  createOneRegister(character) {
    return this.handler.post(`/characters`, character)
  }

  updateOneRegister(character) {
    return this.handler.patch(`/characters/${character.id}`, character)
  }

  deleteOneRegister(id) {
    return this.handler.delete(`/characters/${id}`)
  }
}
export default APIHandler