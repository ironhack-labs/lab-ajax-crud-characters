class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({
      baseURL: this.BASE_URL
    })
  }

  getFullList = () => this.axiosApp.get('/characters') 

  getOneRegister = id => this.axiosApp.get(`/characters/${id}`)

  createOneRegister = charInfo => this.axiosApp.post('/characters', charInfo)

  updateOneRegister = (id, characterInfo) => this.axiosApp.put(`/characters/${id}`, characterInfo)

  deleteOneRegister = id => this.axiosApp.delete(`/characters/${id}`)


}
