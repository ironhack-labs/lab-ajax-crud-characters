class APIHandler {
  constructor() {
    this.axiosApp = axios.create({
      baseURL: 'https://minions-api.herokuapp.com/characters'
    })
  }


  getFullList = () => this.axiosApp.get('/') 

  getOneRegister = characterId => this.axiosApp.get(`/${characterId}`)

  createOneRegister = characterInfo => this.axiosApp.post('/', characterInfo)

  updateOneRegister = (characterId, characterInfo) => this.axiosApp.put(`/${characterId}`, characterInfo)

  deleteOneRegister = characterId => this.axiosApp.delete(`/${characterId}`)
}


