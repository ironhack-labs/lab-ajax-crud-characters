class APIHandler {
  // constructor (baseUrl) {
  //   this.BASE_URL = baseUrl;
  constructor() {
    this.app = axios.create({
      baseURL: 'https://minions-api.herokuapp.com/'
    })
  }


  getFullList () {
   return this.app.get('/characters')
  }

  getOneRegister (id) {
   return this.app.get(`/characters/${id}`)
  }

  createOneRegister (newCharacter) {
    return this.app.post('/characters', newCharacter)
  }

  updateOneRegister (id, editCharacter) {
    return this.app.put(`/characters/${id}`, editCharacter)
  }

  deleteOneRegister (id, character) {
    return this.app.delete(`/characters/${id}`, character)
  }
}
