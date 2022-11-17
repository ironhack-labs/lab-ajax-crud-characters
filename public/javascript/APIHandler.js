class APIHandler {
  constructor (baseUrl) {
    // this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: baseUrl
  })
  }

  getFullList = () => {
    console.log("fetched all btn pressed")
    return this.api.get('/characters');
  }
  
  getOneRegister (characterId) {
    console.log("fetch-one pressed", characterId)
    return this.api.get(`/characters/${characterId}`);
  }

  createOneRegister (characterInfo) {
    return this.api.post('/characters', characterInfo);
  }

  updateOneRegister (characterId, characterInfo) {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  }

  deleteOneRegister (characterId) {
    return this.api.delete(`/characters/${characterId}`);
  }
}