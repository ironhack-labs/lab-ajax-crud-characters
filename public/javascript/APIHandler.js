class APIHandler {
  constructor () {
    this.app = axios.create({
      baseURL: 'https://minions-api.herokuapp.com'
    })
  }

  getFullList () {
    
    return this.app.get('/characters')
  }

  getOneRegister (characterId) {
    return this.app.get(`/characters/${characterId}`)
  }

  createOneRegister (characterInfo) {
      return this.app.post('/characters',characterInfo)
  }

  updateOneRegister (characterId, characterInfo) {
    
    return  this.app.put(`/characters/${characterId}`, characterInfo)
  }

  deleteOneRegister (characterId) {
   return this.app.delete(`/characters/${characterId}`)
  }
}
