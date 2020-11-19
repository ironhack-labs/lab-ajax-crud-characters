class APIHandler {
  constructor(baseUrl) {
    this.axiosApp = axios.create({
      baseURL: baseUrl
    })
  }

  getFullList = () => this.axiosApp.get('/characters')

  getOneRegister = character_id => this.axiosApp.get(`/characters/${character_id}`)

  createOneRegister = characterInfo => this.axiosApp.post('/characters', characterInfo)

  updateOneRegister = (character_id, newCharacterInfo) => this.axiosApp.put(`/characters/${character_id}`, newCharacterInfo)

  deleteOneRegister = character_id => this.axiosApp.delete(`characters/${character_id}`)

}
