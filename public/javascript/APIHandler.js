class APIHandler {
  constructor (baseURL) {
    this.api = axios.create({
      baseURL: baseURL
    });
    this.BASE_URL = baseURL;
  }

  getFullList () {
    return this.api.get("/characters")
  }

  getOneRegister (characterId) {
    return this.api.get(`/characters/${characterId}`)
  }

  createOneRegister (characterInfo) {
    return this.api.post(`/characters`, characterInfo)
  }
  
  updateOneRegister (characterId, characterInfo) {
    return this.api.put(`/characters/${characterId}`, characterInfo)
  }
  
  deleteOneRegister (characterId) {
    return this.api.delete(`/characters/${characterId}`)
  }
}
