class MinionsApiHandler {

  constructor() {
    this.app = axios.create({
      baseURL: 'https://minions-api.herokuapp.com'
    })
  }

  getAllMinions = () => this.app.get('/characters')

  getMinion = characterId => this.app.get(`/characters/${characterId}`)

  createMinion = (characterInfo) => this.app.post('/characters/', characterInfo)

  updateMinion = (characterId, characterInfo) => this.app.put(`/characters/${characterId}`, characterInfo)

  deleteMinion = characterId => this.app.delete(`/characters/${characterId}`)
}