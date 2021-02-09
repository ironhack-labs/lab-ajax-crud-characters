class APIHandler {
  // constructor (baseUrl) {
  //   this.BASE_URL = baseUrl;
  constructor() {
    this.app = axios.create({
      baseUrl: 'https://minions-api.herokuapp.com'
    })
  }


  getFullList () {
   return this.app.get('/characters')
  }

  getOneRegister () {
   return this.app.get(`/characters/${id}`)
  }

  createOneRegister (newCharacter) {
    return this.app.post('/characters', newCharacter)
  }

  updateOneRegister (id, editCharacter) {
    return this.app.put(`/characters/${id}`, editCharacter)
  }

  deleteOneRegister (id) {
    return this.app.post(`/characters/${id}`)
  }
}
