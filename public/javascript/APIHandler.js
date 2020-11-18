class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl
    this.axiosApp = axios.create({baseUrl: 'https://minions-api.herokuapp.com/'})  
  }

  getFullList = () => this.axiosApp.get('/characters') //mostrar todos
  createOneRegister = characterInfo => this.axiosApp.post('/characters', characterInfo) //crear uno
  getOneRegister = characterId => this.axiosApp.get(`/characters/${characterId}`) //obtener uno de la lista 
  updateOneRegister = (characterId, characterInfo) => this.axiosApp.put(`/characters/${characterId}`, characterInfo) //editar uno
  deleteOneRegister = characterId => this.axiosApp.delete(`/characters/${characterId}`) //eliminar uno
  // getFullList () {

  // }

  // getOneRegister () {

  // }

  // createOneRegister () {

  // }

  // updateOneRegister () {

  // }

  // deleteOneRegister () {

  // }
}
