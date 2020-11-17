class APIHandler {

  constructor() {
    this.index = axios.create({
      baseURL: 'https://minions-api.herokuapp.com'
    })
  }


  getFullList = () => this.index.get('/characters')

  getOneRegister = characterId => this.index.get(`/characters/:${characterId}`)

  createOneRegister = characterInfo => this.index.post('/characters', characterInfo)

  updateOneRegister = (characterId, characterInfo) => this.index.put(`/characters/:${characterId}`, characterInfo)

  deleteOneRegister = characterId => this.index.delete(`/characters/:${characterId}`)


}




