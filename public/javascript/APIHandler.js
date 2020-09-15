class APIHandler {
  constructor (base_Url) {
    this.app = axios.create({
      baseURL: base_Url
    })
  }

  getFullList = () => this.app.get("/characters")

  getOneRegister = characId => this.app.get(`/characters/${characId}`)

  createOneRegister = characInfo => this.app.post(`/characters`, characInfo)

  updateOneRegister = (characId, characInfo) => this.app.put(`/characters/${characId}`, characInfo)

  deleteOneRegister = characId => this.app.delete(`/characters/${characId}`)
}
