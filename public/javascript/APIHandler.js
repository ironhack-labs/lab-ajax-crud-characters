class APIHandler {
  constructor () {
    console.log('API handler inicializada')

    this.axiosApp = axios.create({ baseURL: 'https://minions-api.herokuapp.com/characters' })
  }

  getFullList = () => this.axiosApp.get('/')

  getOneRegister = id => this.axiosApp.get(`/${id}`)

  createOneRegister = newCharacter => this.axiosApp.post('/', newCharacter)
    
  updateOneRegister = (characterID, characterToUpdate) => this.axiosApp.put(`/${characterID}`, characterToUpdate)

  deleteOneRegister = id => this.axiosApp.delete(`/${id}`)
}
