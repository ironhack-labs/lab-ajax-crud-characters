export default class APIHandler {
  constructor (baseURL) {
    this.api = axios.create({
      baseURL
    });
  }

  getAll () {
    return this.api.get(`/characters`)
  }

  getOne (id) {
    return this.api.get(`/characters/${id}`)
  }

  createOne (character) {
    return this.api.post(`/characters`, character)
  }

  updateOne (character) {
    return this.api.put(`/characters/${character.id}`, character)
  }

  deleteOne (id) {
    return this.api.delete(`/characters/${id}`)
  }
}
