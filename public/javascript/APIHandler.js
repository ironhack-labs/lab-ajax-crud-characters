class APIHandler {
  constructor(baseUrl) {
    // this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({ baseURL: baseUrl })
  }

  getFullList = () => this.axiosApp.get('/characters')

  getOneRegister = characterId => this.axiosApp.get(`/characters/${characterId}`)

  createOneRegister = characterInfo => this.axiosApp.post('/characters', characterInfo)

  updateOneRegister = (characterId, characterInfo) => this.axiosApp.put(`/characters/${characterId}`, characterInfo)

  deleteOneRegister = characterId => this.axiosApp.delete(`/characters/${characterId}`)

}
