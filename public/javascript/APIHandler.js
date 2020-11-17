class APIHandler {
  constructor () {
    this.axiosApp = axios.create({
      BASE_URL: 'https://minions-api.herokuapp.com'
    })
  }

  getFullList = () => this.axiosApp.get('/characters')

  getOneRegister = (charId, charInfo) => this.axiosApp.put(`/characters/${charId}`, charInfo)

  createOneRegister = () => this.axiosApp.get('/characters')

  updateOneRegister = (charId, charInfo) => this.axiosApp.put(`/characters/${charId}`, charInfo)

  deleteOneRegister = (charId, charInfo) => this.axiosApp.put(`/characters/${charId}`, charInfo)
}
