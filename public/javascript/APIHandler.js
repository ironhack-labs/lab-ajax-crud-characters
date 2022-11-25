class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({
      BASE_URL: baseUrl
    })
    
  }

  getFullList () {
    return this.api.get('http://localhost:8000/characters')
  }

  getOneRegister (characterId) {
    return this.api.get(`http://localhost:8000/characters/${characterId}`)
  }

  createOneRegister (name, occupation, weapon, isCartoon) {
    return this.api.post('http://localhost:8000/characters', {name, occupation, weapon, isCartoon})
  }

  updateOneRegister (characterId, characterInfo) {
    return this.api.put(`http://localhost:8000/characters/${characterId}`, characterInfo)
  }

  deleteOneRegister (characterId) {
    return this.api.delete(`http://localhost:8000/characters/${characterId}`)
  }
}
