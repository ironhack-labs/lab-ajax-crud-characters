class APIHandler {
  constructor () {
    this.app = axios.create({
      baseURL: 'https://minions-api.herokuapp.com'
    })
  }

  getFullList() {
    
    return this.app.get('/characters')

  }

  getOneRegister (characterId) {

    return this.app.get(`/characters/${characterId}`)

  }

  createOneRegister (characterDetails) {

    return this.app.post('/characters', characterDetails)

  }

  updateOneRegister(characterId, characterDetails) {
    
    return this.app.put(`/characters/${characterId}`, characterDetails)

  }

  deleteOneRegister (characterId) {

    return this.app.get(`/characters/${characterId}`)

  }
}
