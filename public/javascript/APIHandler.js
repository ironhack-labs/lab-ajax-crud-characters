
class APIHandler {

  constructor() {
    this.axiosApp = axios.create({
      baseURL: 'https://minions-api.herokuapp.com'
    })
  }

  getFullList = () => this.axiosApp.get('/characters')

  getOneRegister = charId => this.axiosApp.get(`/characters/${charId}`)

  deleteOneRegister = charId => this.axiosApp.delete(`/characters/${charId}`)

  createOneRegister = charInfo => this.axiosApp.post('/characters', charInfo)

  updateOneRegister = (charId, charInfo) => this.axiosApp.put(`/characters/${charId}`, charInfo)
}




