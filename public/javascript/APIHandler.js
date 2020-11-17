class APIHandler {

  constructor() {
    this.axiosApp = axios.create({
      baseURL: 'https://minions-api.herokuapp.com/'

    })
  }


  getFullList = () => this.axiosApp.get('/characters')
  
  
  getOneRegister = characterID => this.axiosApp.get(`/characters/${characterID}`)


  createOneRegister = characterInfo => this.axiosApp.post('/characters', characterInfo)


  updateOneRegister = (characterID, characterInfo) => this.axiosApp.put(`/characters/${characterID}`, characterInfo)


  deleteOneRegister = characterID => this.axiosApp.delete(`/characters/${characterID}`)
  
}
