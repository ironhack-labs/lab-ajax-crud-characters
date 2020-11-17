class APIHandler {

  constructor(baseURL) {
    this.axiosApp = axios.create({
      baseURL: baseURL
    })
  }

  getFullList = () => this.axiosApp.get('/characters')

  getOneRegister = characterId => this.axiosApp.get(`/characters/${characterId}`)  

  deleteOneRegister = characterId => this.axiosApp.delete(`/characters/${characterId}`) // pasar parametro

  createOneRegister = characterInfo => this.axiosApp.post('/characters', characterInfo)

  updateOneRegister = (characterId, characterInfo) => this.axiosApp.put(`/characters/${characterId}`, characterInfo) // pasar parametro

}