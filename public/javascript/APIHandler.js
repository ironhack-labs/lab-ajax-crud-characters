

class APIHandler {
  constructor () {
    this.BASE_URL = "http://localhost:8000";
    this.api = axios.create({
      baseURL: this.BASE_URL})
  }

  getFullList () {
    return this.api.get('/characters')
  }

  getOneRegister (characterId) {
    return this.api.get(`/characters/${characterId}`)
  }

  createOneRegister (characterInfo) {
    return this.api.post(`/characters`, characterInfo);
  }

  updateOneRegister (characterId, characterInfo) {
    return this.api.put(`/characters/${characterId}`, characterInfo)
  }

  deleteOneRegister (characterId) {
    return this.api.delete(`/characters/${characterId}`)
  }
}
