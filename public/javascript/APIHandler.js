class APIHandler {
  constructor() {

        console.log('API handler inicializada')

        this.axiosApp = axios.create({
            baseURL: 'https://minions-api.herokuapp.com'
        })
  }

  getFullList = () => this.axiosApp.get('/characters')
  

  getOneRegister = characterId => this.axiosApp.get(`/characters/${characterId}`)

  deleteOneRegister = characterId => this.axiosApp.delete(`/characters/${characterId}`)

  createOneRegister = characterInfo => this.axiosApp.post('/characters', characterInfo)

  updateOneRegister = (characterId, characterInfo) => this.axiosApp.put(`/characters/${characterId}`, characterInfo)



  
}
