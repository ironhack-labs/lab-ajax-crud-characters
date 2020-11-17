class APIHandler {
  constructor () {
    this.axiosApp = axios.create({baseUrl:'https://minions-api.herokuapp.com'})
  }



  getFullList = () => this.axiosApp.get('/characters')
  getOneRegister = charId => this.axiosApp.get(`/characters/${charId}`)
  createOneRegister = charInfo => this.axiosApp.post('/characters', charInfo) 
  updateOneRegister = (charId, charInfo) => this.axiosApp.put(`/characters/${charId}`, charInfo) 
  deleteOneRegister = charId => this.axiosApp.delete(`/characters/${charId}`)
}
