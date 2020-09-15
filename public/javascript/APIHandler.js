class APIHandler {
  constructor () {
    this.BASE_URL = axios.create({baseURL:'https://minions-api.herokuapp.com'})
  }

  getFullList = () => this.BASE_URL.get('/characters') 

  getOneRegister = Id => this.BASE_URL.get(`/characters/${Id}`)

  createOneRegister = registerInfo => this.BASE_URL.post('/characters',registerInfo)

  updateOneRegister = (Id, registerInfo) => this.BASE_URL.put(`/characters/${Id}`,registerInfo) 

  deleteOneRegister = Id => this.BASE_URL.delete(`/characters/${Id}`)
}
