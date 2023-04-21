class APIHandler {
  constructor (baseUrl) {
    // this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: baseUrl
    })
  }

  getFullList () {
    return this.api.get("/characters")
  }

  getOneRegister (characterId) {
    return this.api.get(`/characters/${characterId}`)
  }

  createOneRegister (characterInfo) {
    return this.api.post("/characters", characterInfo)
  }
  
  updateOneRegister (characterId, characterInfo) {
    return this.api.put(`/characters/${characterId}`, characterInfo)
    
  }
  // bei put und post wird second argument in den body geliefert (oder halt hier das Argument bei post lol)
  
  deleteOneRegister (characterId) {
    return this.api.delete(`/characters/${characterId}`)
  }
}

// module.exports = ApiService brauchen wir hier nicht (weil kein nodejs, 
// allerdings ist es ja bei der lecture von heute auch axios und nicht nodejs und
// steht es noch (oder nur in meiner Version?))
