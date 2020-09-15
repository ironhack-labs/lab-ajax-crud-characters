class APIHandler {
  constructor(baseUrl) {
    this.app = axios.create({
      baseURL: baseUrl
    })
  }

  getFullList = () => this.app.get('/characters')


  getOneRegister = (chartID) => this.app.get(`/characters/${chartID}`)


  createOneRegister = (chartInfo) => this.app.post('/characters', chartInfo)


  updateOneRegister = (chartId, chartInfo) => this.app.put(`/characters/${chartId}`, chartInfo)


  deleteOneRegister = (chartId) => this.app.delete(`/characters/${chartId}`)

}