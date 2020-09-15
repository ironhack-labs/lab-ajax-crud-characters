class APIHandler {
  constructor() {
    this.index = axios.create({
      baseURL: 'https://minions-api.herokuapp.com'
    });
  }

  getFullList = () => this.index.get('/characters')

  getOneRegister = characterID => this.index.get(`/characters/${characterID}`)

  createOneRegister = charactersInfo => this.index.post('/characters/', charactersInfo)

  updateOneRegister = (characterID, characterInfo) => this.index.put(`/characters/${characterID}`, characterInfo)

  deleteOneRegister = characterID => this.index.delete(`/characters/${characterID}`)
}

