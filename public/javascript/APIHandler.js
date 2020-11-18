class APIHandler {

  constructor(baseURL) {

    console.log('API handler INITIATED')

    this.axiosApp = axios.create({
      baseURL: 'https://minions-api.herokuapp.com/',
    })
  }


  getFullList = () => this.axiosApp.get('/characters')

  getOneRegister = characterId => this.axiosApp.get(`/characters/${characterId}`)

  deleteOneRegister = characterId => this.axiosApp.delete(`/characters/${characterId}`)

  createOneRegister = characterValues => this.axiosApp.post('/characters', characterValues)

  updateOneRegister = (characterId, characterValues) => this.axiosApp.put(`/characters/${characterId}`, characterValues)



}


